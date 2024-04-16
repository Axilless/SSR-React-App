export { Link } from "./Link/Link";

// Reexport material components
// This is required for a cleaner architecture.
// If the library needs to be replaced, there is no need to make changes to each component
export {
  Box,
  Stack,
  Breadcrumbs as UiBreadcrumbs,
  Typography,
  TextField,
  Autocomplete,
  Paper,
  Button,
  IconButton,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
