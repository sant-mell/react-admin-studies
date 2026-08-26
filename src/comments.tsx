// comments
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material";
import type { ListProps } from "react-admin";
import { List, DataTable, SimpleList, TextField, EmailField } from "react-admin";

export const CommentList = (props: ListProps) => {
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: any) => record.name}
          secondaryText={(record: any) => record.email}
          tertiaryText={(record: any) => record.body}
        />
      ) : (
        <DataTable rowClick="edit">
          <DataTable.Col source="id" />
          <DataTable.Col source="name" />
          <DataTable.Col>
            <EmailField source="email" />
          </DataTable.Col>
          <DataTable.Col source="body" />
        </DataTable>
      )}
    </List>
  );
};

export default CommentList;
