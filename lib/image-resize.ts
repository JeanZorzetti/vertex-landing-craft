/**
 * Redimensiona uma imagem para que o maior lado não exceda 2048 pixels
 * e retorna a string base64 da imagem redimensionada.
 *
 * @param file - O arquivo de imagem do input
 * @param maxSize - Tamanho máximo permitido para o maior lado (padrão: 2048)
 * @returns Promise com a string base64 da imagem redimensionada
 */
export async function resizeImageToBase64(
  file: File,
  maxSize: number = 2048
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const originalWidth = img.width;
        const originalHeight = img.height;

        console.log(`Tamanho Original: ${originalWidth} x ${originalHeight}`);

        // Calcula o novo tamanho mantendo a proporção
        let newWidth = originalWidth;
        let newHeight = originalHeight;

        // Se a imagem já for menor que o limite, não redimensiona
        if (originalWidth <= maxSize && originalHeight <= maxSize) {
          console.log(`Tamanho Novo: ${newWidth} x ${newHeight} (sem alteração)`);

          // Retorna a imagem original em base64
          const canvas = document.createElement('canvas');
          canvas.width = originalWidth;
          canvas.height = originalHeight;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            reject(new Error('Não foi possível criar contexto do canvas'));
            return;
          }

          ctx.drawImage(img, 0, 0);
          const base64 = canvas.toDataURL(file.type || 'image/jpeg', 0.9);
          resolve(base64);
          return;
        }

        // Redimensiona baseado no maior lado
        if (originalWidth > originalHeight) {
          // Largura é maior
          newWidth = maxSize;
          newHeight = Math.round((originalHeight * maxSize) / originalWidth);
        } else {
          // Altura é maior ou igual
          newHeight = maxSize;
          newWidth = Math.round((originalWidth * maxSize) / originalHeight);
        }

        console.log(`Tamanho Novo: ${newWidth} x ${newHeight}`);

        // Cria canvas e redimensiona
        const canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Não foi possível criar contexto do canvas'));
          return;
        }

        // Desenha a imagem redimensionada
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        // Converte para base64
        const base64 = canvas.toDataURL(file.type || 'image/jpeg', 0.9);
        resolve(base64);
      };

      img.onerror = () => {
        reject(new Error('Erro ao carregar a imagem'));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Erro ao ler o arquivo'));
    };

    reader.readAsDataURL(file);
  });
}
