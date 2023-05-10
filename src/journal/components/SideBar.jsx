import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 1 } }}>
        <Drawer variant='permanent' open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>Oscar Menacho</Typography>
            </Toolbar>
        <Divider />
        <List>
            {
                ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                  <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Proident veniam ut ex voluptate consectetur.'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
        </Drawer>
    </Box>
  )
}
