import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Senha = () => {
    const [senha, setSenha] = useState('');
    return(
      <Grid item xs={12}>  
        <FormControl fullWidth>
          <Input id="senha nome" aria-describedby="senha_helper_text" value={senha}
          onChange={e => { setSenha(e.target.value) }} />
          <FormHelperText id="senha_helper_text">Senha</FormHelperText>
        </FormControl>
      </Grid>
    );
}
export default Senha;