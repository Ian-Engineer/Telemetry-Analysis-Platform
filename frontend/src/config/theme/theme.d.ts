import { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    textField: {
      border: string;
    };
  }
  interface PaletteOptions {
    textField?: {
      border?: string;
    };
  }
}
