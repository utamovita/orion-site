const redirectsDE = [
    {
        source: '/de/o-nas',
        destination: '/de/uber-uns',
        permanent: true
    },
    {
        source: '/de/galeria',
        destination: '/de/galerie',
        permanent: true
    },
    {
        source: '/de/kariera',
        destination: '/de/karriere',
        permanent: true
    },
    {
        source: '/de/kontakt',
        destination: '/de/contact',
        permanent: true
    },
    {
        source: '/de/dokumenty',
        destination: '/de/unterlagen',
        permanent: true
    },
]

const redirectsEN = [
    {
        source: '/en/o-nas',
        destination: '/en/about-us',
        permanent: true
    },
    {
        source: '/en/galeria',
        destination: '/en/gallery',
        permanent: true
    },
    {
        source: '/en/kariera',
        destination: '/en/career',
        permanent: true
    },
    {
        source: '/en/kontakt',
        destination: '/en/contact',
        permanent: true
    },
    {
        source: '/en/dokumenty',
        destination: '/en/documents',
        permanent: true
    },
]

const redirects = [...redirectsDE, ...redirectsEN];

export default redirects