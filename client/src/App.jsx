import { useState } from 'react';
import axios from 'axios';
import ErrorSection from './components/ErrorSection';
import BugSection from './components/BugSection';
import NoteSection from './components/NoteSection';
import OptimizationSection from './components/OptimizationSection';
import SuggestionSection from './components/SuggestionSection';
import CorrectCode from './components/CorrectCode';
import ReportCard from './components/ReportCard';
function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [Loading, setLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("Loading...")
    setLoading(true)
    const prompts = `
    Hey there! I'm in a bit of a bind and could really use your expertise. I have some code that needs urgent attention—it's riddled with errors and desperately needs optimization. Can you please help me out? Below is the code I'm currently working with:
    ${prompt}
    It's imperative that we address any errors, improve efficiency, and optimize the code structure as soon as possible. Could you please review the code and provide your feedback? I'm counting on you to help resolve these issues swiftly. Your response should be only in a JSON-like format with categories such as 'errors', 'suggestions', 'notes', 'bugs','correctcode','remarks' or any other relevant areas. Please exclude any starting and ending code blocks and provide only the JSON data. This is a strict rule that we need to follow. Thank you for your urgent assistance!
    
    `
    try {
      await axios.post('http://localhost:5000/send-prompt', { prompt: prompts })
        .then(response => {
          const responseJson = JSON.parse(response.data.response) || { errors: [], bugs: [], notes: [], optimization: [], suggestions: [], correctcode: [], remarks: []}
          console.log(responseJson)
          setResponse(responseJson)
          setLoading(false)
        })
    } catch (error) {
      console.error('Error:', error);
      setResponse('Failed to send prompt to Anthropic API');
      setLoading(false)
    }
  };

  return (
    <div className='bg-slate-800 grid place-content-center min-h-screen '>
      <form onSubmit={handleSubmit} className='flex flex-col text-center'>
        <label className='text-white mb-4'>
          Paste a code snippet or prompt for review:
        </label>
        <textarea
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          rows='10'
          className='bg-slate-900 text-white p-2 rounded-md resize-none w-[700px]'
        />
        <button type="submit" className='bg-green-500 w-[200px] mt-10 rounded-lg'>
          {Loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <ErrorSection errors={response.errors} />
      <BugSection bugs={response.bugs} />
      <NoteSection notes={response.notes} />
      <OptimizationSection optimizations={response.optimization} />
      <SuggestionSection suggestions={response.suggestions} />
      <CorrectCode correct={response.correctcode}/>
      <ReportCard remarks={response.remarks}/>
    </div>
  );
}

export default App;