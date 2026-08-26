// albums
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material";
import type { ListProps } from "react-admin";
import { List, DataTable, SimpleList} from "react-admin";

export const AlbumList = (props: ListProps) => {
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: any) => record.title}
          secondaryText={(record: any) => `User ${record.userId}`}
        />
      ) : (
        <DataTable rowClick="edit">
          <DataTable.Col source="id" />
          <DataTable.Col source="title" />
          <DataTable.Col source="userId" label="User" />
        </DataTable>
      )}
    </List>
  );
};

export default AlbumList;
