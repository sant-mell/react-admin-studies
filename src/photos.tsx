// photos
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material";
import type { ListProps } from "react-admin";
import { List, DataTable, SimpleList} from "react-admin";

export const PhotoList = (props: ListProps) => {
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down("sm"));

  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: any) => record.title}
          secondaryText={(record: any) => `Album ${record.albumId}`}
        />
      ) : (
        <DataTable rowClick="edit">
          <DataTable.Col source="id" />
          <DataTable.Col source="title" />
          <DataTable.Col source="thumbnailUrl"> 
          </DataTable.Col>
          <DataTable.Col source="url">
          </DataTable.Col>
        </DataTable>
      )}
    </List>
  );
};

export default PhotoList;
