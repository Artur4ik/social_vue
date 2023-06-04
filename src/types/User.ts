export default interface User {
  id?: number,
  name: string,
  avatar: string,
  country?: string,
  city?: string,
  sex?: string,
  birthdate?: string
  posts?: Object,
  bio: string,
}
