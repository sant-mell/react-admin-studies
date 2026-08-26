// posts
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material";
import type { ListProps } from "react-admin";
import { List, DataTable, SimpleList, TextField } from "react-admin";

export const PostList = (props: ListProps) => {
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: any) => record.title}
          secondaryText={(record: any) => record.body}
        />
      ) : (
        <DataTable rowClick="edit">
          <DataTable.Col source="id" />
          <DataTable.Col source="title" />
          <DataTable.Col source="body" />
        </DataTable>
      )}
    </List>
  );
};