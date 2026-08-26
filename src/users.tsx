// users
/*
export const UserList = (props: ListProps) => (
  <List {...props}>
    <DataTable rowClick="edit">
      <DataTable.Col source="id" />
      <DataTable.Col source="name" />
      <DataTable.Col source="username" />
      <DataTable.Col>
        <EmailField source="email" />
      </DataTable.Col>
      <DataTable.Col source="phone" />
      <DataTable.Col source="website" />
      <DataTable.Col source="company.name" label="Company" />
    </DataTable>
  </List>
);

export const UserList = () => (
    <List>
        <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.username}
            tertiaryText={record => record.email}
        />
    </List>
);
*/

// in src/users.tsx
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable, EmailField } from "react-admin";

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <DataTable>
                    <DataTable.Col source="id" />
                    <DataTable.Col source="name" />
                    <DataTable.Col source="username" />
                    <DataTable.Col source="email">
                        <EmailField source="email" />
                    </DataTable.Col>
                    <DataTable.Col source="address.street" />
                    <DataTable.Col source="phone" />
                    <DataTable.Col source="website" />
                    <DataTable.Col source="company.name" />
                </DataTable>
            )}
        </List>
    );
};