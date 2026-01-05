export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vértice Marketing",
    "alternateName": "Vértice",
    "url": "https://vertice.roilabs.com.br",
    "logo": "https://vertice.roilabs.com.br/logos/logo-main.png",
    "description": "Agência de marketing digital especializada em tráfego pago, CRM e consultoria de performance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Cequeira Cesar nº 60",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-62-99326-5713",
      "contactType": "customer service",
      "email": "verticecomp@gmail.com",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/vertice.assessoria/"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Vértice Marketing",
    "image": "https://vertice.roilabs.com.br/logos/logo-main.png",
    "description": "Agência de marketing digital com foco em resultados mensuráveis",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Cequeira Cesar nº 60",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01414-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "url": "https://vertice.roilabs.com.br",
    "telephone": "+55-62-99326-5713",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vértice Marketing",
    "image": "https://vertice.roilabs.com.br/logos/logo-main.png",
    "@id": "https://vertice.roilabs.com.br",
    "url": "https://vertice.roilabs.com.br",
    "telephone": "+55-62-99326-5713",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Cequeira Cesar nº 60",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01414-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
