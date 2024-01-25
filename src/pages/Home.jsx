import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        <Header/>
         <h2>LoL Lore</h2>
         <p>
            Many are unaware that the popular multiplayer online game League of Legends, developed by Riot Games,
            has a rich and unique story with a fleshed out map that covers many territories from which the
            esteemed Champions hail. With the many short stories, comic books and cinematics, the world of Runeterra
            is an abundant well of lore for fans to sink their teeth into.
         </p>
         <h2>The Quiz</h2>
            <p>
               Would you like to test your knowledge? Maybe learn new things about the wonderful world of LoL?
               Take this multiple choice quiz and find out just how well you know your favorite Champions.
            </p>

            <ul>
               <li>There are 20 questions.</li>
               <li>Select one answer from the available options and click "Submit"
                  when you're happy with your response.
               </li>
               <li>You will receive confirmation whether your answer was correct with 
                  some explanation of the lore.</li>
               <li>Click "OK" when you've finished reading the alert and you'll be taken 
                  to the next question.</li>
               <li>Your results will be tabulated at the end and you'll be given the option
                  of following a link to the League of Legends Universe website.</li>
               <li>You can also click "Restart Quiz" to try again or "Shuffle Questions" to 
                  randomize the quiz questions.</li>
            </ul>

            <div class="ready">
            <a onClick={() => navigate('/quiz')} aria-label="Takes user to the quiz">
               Ready?
            </a>
         </div>

        </>
    )
}