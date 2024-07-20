import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const GlowTypography = styled(Typography)(() => ({
  flexGrow: 1,
  '& span': {
    color: '#dc004e', // cor secundária
    textShadow: '0 0 5px #dc004e, 0 0 10px #dc004e, 0 0 15px #dc004e, 0 0 20px #dc004e, 0 0 25px #dc004e',
    animation: 'glow 1.5s infinite alternate',
  },
  '@keyframes glow': {
    '0%': {
      textShadow: '0 0 5px #dc004e, 0 0 10px #dc004e, 0 0 15px #dc004e, 0 0 20px #dc004e, 0 0 25px #dc004e',
    },
    '100%': {
      textShadow: '0 0 10px #dc004e, 0 0 20px #dc004e, 0 0 30px #dc004e, 0 0 40px #dc004e, 0 0 50px #dc004e',
    },
  },
}));

export default function Header() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <GlowTypography variant="h4">
          Enig<span>max</span>
        </GlowTypography>
        <Button color="inherit">Novidades</Button>
        <Button color="inherit">Filmes</Button>
        <Button color="inherit">Séries</Button>
        <div style={{ flexGrow: 1 }}></div>
        <div style={{ position: 'relative' }}>
        </div>
      </Toolbar>
    </AppBar>
  );
}
