import React, { FC } from 'react';
import './AccoutSettingsPage.scss';
import { Grid, AppBar, Toolbar, IconButton, InputBase, Box, Link as MuiLink, Container, Stack, Typography, Button, Chip, TextField, Divider, TableBody, Table, TableCell, TableRow, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
interface AccoutSettingsPageProps { }
let hiddenEmail: string = '';
let hiddenPhone: string = '';

function EmailComponent() {
  const email: string = '0123456789@gmail.com';
  hiddenEmail = email.substring(0, 2) + email.substring(2).replace(/\d/g, '*');
}
function PhoneComponent() {
  const phone: string = '0912345678';
  hiddenPhone = phone.substring(0, 2) + phone.substring(2).replace(/\d/g, '*');
}
const AccoutSettingsPage: FC<AccoutSettingsPageProps> = () =>
{
  EmailComponent();
  PhoneComponent()
  return (
  <Container>
    <Stack direction={'column'} sx={{ backgroundColor: '#D9D9D9', paddingLeft: 5, paddingRight: 5, alignItems: 'start', p: 2, textAlign: 'start' ,marginBottom:5,marginTop:3}}>
      <Stack direction={'row'} sx={{ my: 2,marginLeft:3 ,paddingRight:8}}>
        <Typography variant='body1' fontWeight='bold' sx={{ minWidth: 100 }}>使用者帳號</Typography>
        <TextField
          variant="outlined"
          value="asdzxc"
          InputProps={{
            style: { backgroundColor: 'white' }
          }}
          sx={{ '& .MuiInputBase-root': { height: '30px',fontWeight:'bold' } }}
        />
      </Stack>
      <Stack direction={'row'} sx={{ my: 2 ,marginLeft:3 }}>
        <Typography variant='body1' fontWeight='bold' sx={{ minWidth: 100 }}>姓名</Typography>
        <TextField
          variant="outlined"
          value="王曉銘"
          InputProps={{
            style: { backgroundColor: 'white' }
          }}
          sx={{ '& .MuiInputBase-root': { height: '30px',fontWeight:'bold' } }}
        />
      </Stack>
      <Stack direction={'row'} sx={{ my: 2 ,marginLeft:3 }}>
        <Typography variant='body1' fontWeight='bold' sx={{ minWidth: 100 }}>e-mail</Typography>
        <Typography variant='body1' fontWeight='bold' >{hiddenEmail}</Typography>
      </Stack>
      <Stack direction={'row'} sx={{ my: 2 ,marginLeft:3 }}>
        <Typography variant='body1' fontWeight='bold' sx={{ minWidth: 100 }}>手機號碼</Typography>
        <Typography variant='body1' fontWeight='bold' >{hiddenPhone}</Typography>
      </Stack>
      <Stack direction={'row'} sx={{ my: 2 ,marginLeft:3 }}>
        <Typography variant='body1' fontWeight='bold' sx={{ minWidth: 100 }}>性別</Typography>
        <FormControl sx={{marginTop: '-9px'}}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="female"
          >
            <FormControlLabel value="female" control={<Radio />} label="男" />
            <FormControlLabel value="male" control={<Radio />} label="女" />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Button variant='contained' color="success" sx={{marginLeft: 'auto'}}>確認</Button>
    </Stack>
  </Container>
);
}

export default AccoutSettingsPage;
