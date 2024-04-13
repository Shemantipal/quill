import { useState } from 'react';
import axios from 'axios';

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
    It's imperative that we address any errors, improve efficiency, and optimize the code structure as soon as possible. Could you please review the code and provide your feedback? I'm counting on you to help resolve these issues swiftly. Your response should be in a JSON-like format with categories such as 'errors', 'suggestions', 'notes', 'bugs', or any other relevant areas. Please exclude the starting and ending code blocks and provide only the JSON-like data. Thank you for your urgent assistance!
    
    `
    try {
      await axios.post('http://localhost:5000/send-prompt', { prompt: prompts })
        .then(response => {
          console.log(response.data);
          const responseJson = JSON.parse(response.data.response)
          console.log(responseJson);
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
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label>
          Prompt
        </label>
        <textarea type="text" value={prompt} onChange={handlePromptChange} />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{JSON.stringify(response, null, 2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;