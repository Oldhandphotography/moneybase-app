import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8fe6x9gl',
  dataset: 'production',
  apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
  token:
    'sk1WdUfGFcbfJ0ggUedvhQt9yM1s24dBlv3kxrE470g4aXNlOaf1JYGpkzRHGytFtTnKWj0UZlXvxVFQR5H4M4IEYG7cmu6t9dSR3KD1uVbmXp5IHpTvHb3xivMDZXTiI9AUJTWvjKLrTCpi8AdRn68TV8yUHIGwJFBsfbUMswwMsaMws2JB', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})