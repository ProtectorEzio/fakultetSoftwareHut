import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import movieService, { IMovieResponse } from '../../services/movie.service';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnUlubiony:{
        width:"10px",
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
      background:'linear-gradient(blue,wheat)',
      marginTop:'20px',
      padding: theme.spacing(5),
      margin: 'auto',
      maxWidth: 700,
      border:'1px solid black'

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




const Movie = () => {
    const {id} = useParams<{id:string}>();
    const [isLiked,setIsLiked]= React.useState(false);
    const [movie, setMovie] =  React.useState<IMovieResponse | null>(null)

  React.useEffect(() => {
    movieService.searchById(id).then((resp) => {
        if(resp){
            setMovie(resp)
            console.log(resp)
        }
    });

    //movieService.searchById('tt0848228');
    //movieService.searchById('tt3896198');
  }, []);
  console.log(movie?.Title)
  console.log(`id: ${id}`);

    const classes = useStyles();
    return (
        <div >
            <NavPanel />
            <div className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <Typography gutterBottom variant="h3" component={'span'}  >
                      {movie?.Title} {" "}{movie?.Year}
                  </Typography>
               </Grid>

                <Grid item xs={6}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={movie?.Poster} />
                    </ButtonBase>
                </Grid>

                <Grid item xs={6} sm container>
                        <div>
                        <Button className='btnUlubiony' onClick={()=>setIsLiked(true)}  variant="outlined" color="secondary" component={'span'} >
                          Add to favourite
                        </Button>   
                        </div>
                        <Typography  component={'span'} variant="body2" gutterBottom >
                                <Grid container spacing={2}>
                                  <Grid item xs={6} className={classes.box2}> 
                                    Grade
                                  </Grid>
                                   
                                  <Grid item xs={6} className={classes.box2}>
                                     Votes
                                  </Grid>
                                  <Grid item xs={6} className={classes.ocena}> 
                                    {movie?.Ratings[0].Value }
                                  </Grid>
                                   
                                  <Grid item xs={6} className={classes.glosy}>
                                     {movie?.imdbVotes }
                                  </Grid>
                              </Grid>
                          </Typography>
                        <Typography component={'span'} variant="body2" gutterBottom>

                          <Typography component={'span'} variant="body2" gutterBottom>
                            Type: <strong>{movie?.Type}</strong>
                          </Typography>
                          
                          <br/>
                          <Typography component={'span'} variant="body2" gutterBottom>
                           Country: <strong>{movie?.Country}</strong>
                          </Typography>
                          <br/>
                          <Typography component={'span'} variant="body2" gutterBottom>
                          Director: <strong>{movie?.Director}</strong>
                          </Typography>
                          <br/>

                          <Typography component={'span'} variant="body2" gutterBottom>
                          Production: <strong> {movie?.Production}</strong>
                          </Typography>
                          <br/>

                          <Typography component={'span'} variant="body2" gutterBottom>
                          Released:  <strong>{movie?.Released }</strong>
                          </Typography>
                          <br/>
                          <Typography component={'span'} variant="body2" gutterBottom>
                          Run Time:  <strong>{movie?.Runtime} </strong>
                          </Typography>
                          <br/>

                        </Typography>

                    </Grid >

                    <Grid item xs={12}>
                        <Typography component={'span'} variant="body2" gutterBottom>
                          Plot: {movie?.Plot}
                        </Typography>
                        <br/>
                        <Typography component={'span'} variant="body2" gutterBottom>
                          Actors:  <strong>{movie?.Actors} </strong>
                        </Typography>

                    </Grid>
                    
                </Grid>
      </div>
                

        </div>
    );
};

export default Movie;