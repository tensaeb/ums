/* eslint-disable react-hooks/rules-of-hooks */
import { Chip, useTheme } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "Student Id",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "name",
    headerName: "Name",
    width: 450,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "contacts",
    headerName: "Contact Details",
    width: 400,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => {
      return (
        <>
          {params.row.contacts.map((contact, index) => (
            <Chip
              key={index}
              label={contact}
              style={{
                marginRight: 4,
                // backgroundColor: theme.palette.primary.light,
              }}
            />
          ))}
        </>
      );
    },
  },
  {
    field: "courses",
    headerName: "Enrolled Courses",
    width: 480,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => {
      const theme = useTheme();
      return (
        <>
          {params.row.courses.map((course, index) => (
            <Chip
              key={index}
              label={course}
              style={{
                marginRight: 4,
                backgroundColor: theme.palette.primary.light,
              }}
            />
          ))}
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Mulatu Astatke",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
  {
    id: 2,
    name: "Alemayehu Tuta",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
  {
    id: 3,
    name: "Beletu Tumsa",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
  {
    id: 4,
    name: "Mekuya Limatu",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
  {
    id: 5,
    name: "Soreti Lemma",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
  {
    id: 6,
    name: "Abebe Kebede",
    contacts: ["john.doe@email.com", "123-456-7890"],
    courses: ["Amharic", "English", "Physics"],
  },
];

export { columns, rows };
