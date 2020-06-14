import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import movieService, { IMovieResponse, IMoviesProps } from '../../services/movie.service';
import { TextField, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnUlubiony:{
        width:"10px"
    },
    box:{
     textAlign:'center',
     fontSize:'25px',
     color:'grey',
     padding:'2px',
    },
    box2:{
      textAlign:'center',
      fontSize:'15px',
     color:'grey'
     },
    ocena:{
      height:'60px',
      background:'yellow',
      color:'black',
      textAlign:'center',
      fontSize:'30px',
    },
    glosy:{
      textAlign:'center',
      height:'60px',
      
      background:'grey',
      color:'white',
      fontSize:'30px',
      
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      background:'lightblue',
      marginTop:'20px',
      padding: theme.spacing(5),
      margin: 'auto',
      maxWidth: 700,
      border:'1px solid blue'

    },
    image: {

    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

const Liked=()=>{
    const {id} = useParams<{id:string}>();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');
    React.useEffect(() => {
        movieService.searchByName(movieToSearch).then(resp => {
          if (resp) {
            setMovies(resp);
            console.log(resp);
          }
        });
        
    movieService.searchById('tt3896198');
}, [movieToSearch]);
    return(
        <div>
            <NavPanel/>
            <div style={{background:"linear-gradient(magenta,red,green)"}}>
      {!!movies?.movies.length &&
            movies?.movies.map(movie => (
            <Card>
             <CardActionArea href={`/movie/${movie.id}`} color="primary" className='right'>
                <CardMedia
                  image={movie.poster}
                  title={movie.title}
                />
                
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="span">
                    {movie.year}
                  </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
    ))
    }
    </div>
        </div>
    );
};


export default Liked;