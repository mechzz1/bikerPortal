interface PostInfo {
  id: number
  title: string,
  decription: string,
  createdAt: string,
  User:User,
  name:string,
  email:string,

}

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user attributes as needed
}
export default PostInfo