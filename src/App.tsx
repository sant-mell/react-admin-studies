import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import { UserList } from "./users.tsx";
import { PostList, PostCreate } from "./posts.tsx";
import { CommentList } from "./comments.tsx";
import { AlbumList } from "./albums.tsx";
import { PhotoList } from "./photos.tsx";
import { TodoList } from "./todos.tsx";

export const App = () => (
  <Admin dataProvider={dataProvider} 
  authProvider={authProvider} 
  dashboard={Dashboard}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} create={PostCreate} />
    <Resource name="comments" list={CommentList} />
    <Resource name="albums" list={AlbumList} />
    <Resource name="photos" list={PhotoList} />
    <Resource name="todos" list={TodoList} />
  </Admin>
);
