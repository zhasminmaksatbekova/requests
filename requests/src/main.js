import 'fontsource-roboto';
import "./index.css"
import axios from "axios"
import { useState, useEffect } from "react"

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function TypographyTheme() {
  const classes = useStyles();

  const [db, setDb] = useState([])
  const [error, setError] = useState(null)
  useEffect( () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setDb (response.data) )
  }, [])
  console.log("dataaa: ", db)



  const newArray = db.slice(6, 13)

  return <div className={classes.root}>{newArray.map((row) =>(
      <div>
          <div className="container">
               <div className="title">{row.title}</div>
                <div className="text">{row.body}</div>
         </div>
      </div>
  ))}</div>;
}