import { useState } from 'react';
import axios from 'axios';
import ErrorSection from '../components/app/ErrorSection';
import BugSection from '../components/app/BugSection';
import NoteSection from '../components/app/NoteSection';
import OptimizationSection from '../components/app/OptimizationSection';
import SuggestionSection from '../components/app/SuggestionSection';
import CorrectCode from '../components/app/CorrectCode';
import ReportCard from '../components/app/ReportCard';
import { useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";
function App() {
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return navigate("/signin")
  }
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState({
    errors: [],
    bugs: [],
    notes: [],
    optimization: [],
    suggestions: [],
    correctcode: [],
    marksoutof10: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const prompts = `
    Hey there! I'm in a bit of a bind and could really use your expertise. I have some code that needs urgent attention—it's riddled with errors and desperately needs optimization. Can you please help me out? Below is the code I'm currently working with:
    ${prompt}
    It's imperative that we address any errors, improve efficiency, and optimize the code structure as soon as possible. Could you please review the code and provide your feedback? I'm counting on you to help resolve these issues swiftly. Your response should be only in a JSON-like format with categories such as 'errors', 'suggestions', 'notes', 'bugs','correctcode','marksoutof10' or any other relevant areas. Please exclude any starting and ending code blocks and provide only the JSON data. This is a strict rule that we need to follow. Thank you for your urgent assistance!
    
    `;
    try {
      await axios
        .post('http://localhost:5000/send-prompt', { prompt: prompts })
        .then((response) => {
          const responseJson = JSON.parse(response.data.response) || response;
          console.log(responseJson);
          setResponse(responseJson);
          setLoading(false);
        });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className='bg-cyan-600/20'>
      <div className='dark:bg-dot-thick-neutral-800 min-h-screen flex flex-col justify-center items-center'>
        <form className='flex flex-col text-center  items-center'>
          <label className='text-black font-black mb-4 text-lg italic'>
            Provide the code snippet for review:
          </label>
          <textarea
            value={prompt}
            rows={20}
            onChange={(e) => setPrompt(e.target.value)}
            className='bg-slate-900 text-white p-2 rounded-md resize-none w-[700px] itallic'
          ></textarea>
          <button
            onClick={handleSubmit}
            className='bg-green-500 mt-10 rounded-lg pt-3 pb-3 pr-8 pl-8'>
            {loading ? 'Please Wait...' : 'SUBMIT'}
          </button>
        </form>
        <div className='flex flex-row justify-center items-start gap-10 mb-10'>
          {response.marksoutof10 && <ReportCard marks={response.marksoutof10 as number} />}
          <div className='justify-items-start'>
            {response.errors?.length > 0 && <ErrorSection errors={response.errors as string[]} />}
            {response.bugs?.length > 0 && <BugSection bugs={response.bugs as string[]} />}
            {response.notes?.length > 0 && <NoteSection notes={response.notes as string[]} />}
            {response.optimization?.length > 0 && <OptimizationSection optimizations={response.optimization as string[]} />}
            {response.suggestions?.length > 0 && <SuggestionSection suggestions={response.suggestions as string[]} />}
            {response.correctcode?.length > 0 && <CorrectCode correct={response.correctcode as string[]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
