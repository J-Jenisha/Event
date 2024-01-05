import React from 'react';
import './Manage.css';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';


import bir from '../images/bir.jpg';
import we from '../images/we.jpg';
import vis from '../images/vis.jpg';
import party from '../images/party.jpg';
import anni from '../images/anni.jpg';
import childs from '../images/childs.jpg';


import Search from './Search';
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div id="divide">
      <body>
        <center>

        <Button variant="contained" className="btns" startIcon={<PublicIcon />} style={{ marginRight: '10px' }}>
          Explore everywhere
        </Button>
        <Button variant="contained" className="btns" startIcon={<PersonIcon />} style={{ marginRight: '10px' }}>
          Guide
        </Button>
        <Button variant="contained" className="btns" startIcon={<HotelIcon />} style={{ marginRight: '10px' }}>
          Hotels
        </Button>
        <Button variant="contained" className="btns" startIcon={<SearchIcon />} >
          Find Places
        </Button>
        <br/><br/><br/>
        

        {/* ------------------------------------------------------------------------ */}
        
        
        <table id="table_bg">
          
            <h1 id="let">
            "Entertainment begins here"
            </h1>
            <h4 id="let1">
              Promising to make it the most beautiful & memorable day for you & your guests.
            </h4>
            <h4 id="let1">
            Our comprehensive solutions create impact that lasts far beyond any single event.
            </h4>
            <br/>
            
        
        </table>
        <br/><br/>
{/* <-------------------------- Search ------------------------> */}

        <table>
          <center>
          <h1>Millions of cheap Events. One simple search.Let us plan your perfect wedding.</h1>
          <Search/>
          </center>
          <br/>
          <br/>
{/* <-------------------------- Place ------------------------> */}

        </table>

        <table id="places">

          <tr>

            <td id="card">

    <Card sx={{ maxWidth: 345 }} id="boxx"> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={we}
          alt="Dubai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wedding Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wedding decoration and design are something that attracts attention and gives life to any wedding affair. 
          Planning a wedding includes endless details and a timeline for the wedding outlet. 
             
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
          
        </Button>
      </CardActions>
    </Card>
            </td>

            <td  id="card">

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bir}
          alt="Singapore"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Birthday Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A birthday party is an important factor that each of us will always remember in our memories,
           and every person will try to remember the early memory as it is his birthday celebration which is more important
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
         
        </Button>
      </CardActions>
    </Card>

            </td>  

            <td  id="card">

                
            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={party}
          alt="Bangkok"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Corporate Events
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Building your corporate port depends on how successfully you launch an event right
           from the industry, trending conferences, seminars, exhibitions, award functions, and 
           corporate branding events.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
         
        </Button>
      </CardActions>
    </Card>

            </td>

          </tr>

          <tr   id="card">

            <td>

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={vis}
          alt="Delhi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Housewarming
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We really do have a dream to construct our own house that is tailored to our expectations.
           It's time for the housewarming function, which is an announcement that your dream house has been completed
           and you're ready to share your joy
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
          
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">

            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={anni}
          alt="Mumbai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Annivesary Event
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Never mind whether you are partying your first year or fiftieth Anniversary,
           admiring your time together as a couple invites you for inspiration and love on this 
           special day. Anniversaries provide a wonderful memory.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
          
        </Button>
      </CardActions>
    </Card>

            </td>

            <td  id="card">
            <Card sx={{ maxWidth: 345 }} id="boxx">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={childs}
          alt="chennai"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            School/college Event
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We have a deep understanding of the pain points of institutions as the valued Alumni Event
           Organizer for hundreds of them, and Bamboo Events Planning and Decor is founded to be the 
           one-stop solution to handle all of them.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"><Link to='/bookevents'>Book Now</Link>
          
        </Button>
      </CardActions>
    </Card> 

            </td>

          </tr>
        </table>

        
        </center>
      </body>
    </div>
  );
}