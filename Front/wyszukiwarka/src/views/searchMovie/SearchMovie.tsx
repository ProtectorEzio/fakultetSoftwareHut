import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movie.service';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    marginTop:20,
    marginLeft:'auto',
    marginRight:'auto',
    minHeight:300,
    
  },
  media: {
    minWidth:'100% auto',
    height: 400,
    margin:0,
  },
  movies:{
    background:'lightblue',

  },
  mainDiv:{
    textAlign:'center',
  },
  inputStyles:{
    width:300,

  },
  
  btnInfo:{
    borderTop:'1px solid #CDCDCD',
    padding:5,
    marginLeft:10,
    marginRight:10,

  },
  inputSearch:{
     height:25,
  }


});


const SearchMovie = () => {
  const classes = useStyles();
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


  return (
    <div >
       <NavPanel/>
    <div className={classes.mainDiv}>
      <div className={classes.inputSearch}></div>
      <TextField
        className={classes.inputStyles}
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
        
      />
      </div>

      <div>
      {!!movies?.movies.length &&
            movies?.movies.map(movie => (
            <Card className={classes.root}>
             <CardActionArea href={`/movie/${movie.id}`} color="primary" className='right'>
                <CardMedia
                  className={classes.media}
                  image={movie.poster}
                  title={movie.title}
                />
                
                <CardContent style={{background:'linear-gradient(blue,white,white)'}}>
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

export default SearchMovie;