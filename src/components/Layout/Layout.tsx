import { Container, Grid, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { TextComponent } from '../TextComponent/TextComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Comment, CommentsState } from '../../interfaces/Comment';
import { startLoading, fetchCommentsSuccess, fetchCommentsError, } from '../../redux/commentSlice'
import CardComp from '../Card/Card';
import axios from 'axios'
import Navbar from '../Navbar/Navbar';

export const Layout: FC = () => {

  const dispatch = useDispatch();
  const data: Comment = useSelector((state: { comment: { data: Comment } }) => state.comment.data);

  
  useEffect(()=> {
    const fetchData = async () => {
          try {
            dispatch(startLoading());
            const response = await axios.get('https://api-102.vercel.app/comments');
            dispatch(fetchCommentsSuccess(response.data));
            
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            dispatch(fetchCommentsError(errorMessage));
          }
        };
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
          }, 3000);
            return () => {
            clearInterval(intervalId); 
          };
  }, [dispatch])

  const commentArray: Comment[] = data.comments || []

  return (
    <Container sx={{ justifyContent: 'center', mt: '80px' }}>
      <Navbar/>
      <TextComponent/>
        <Grid container spacing={1} direction="column-reverse">
          {
          commentArray.map((el)=>{
            return (
              <Grid item key={el.createdAt}>
                <CardComp nombre={el.nombre} msg={el.msg}  createdAt={el.createdAt} mg={el.mg} comments={el.comments}/>
              </Grid> 
              )
            })
          }
        </Grid>
    </Container>
  );
};
