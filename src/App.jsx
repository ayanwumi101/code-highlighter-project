import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula, dark, kimbieDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { stackoverflowDark, anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Header from './Header';

function App() {
  const [count, setCount] = useState(0)

  const testing = `
    function startTimer(duration, display) {

        var timer = duration, minutes, seconds;
        setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = minutes + ":" + seconds;

          if (--timer < 0) {
            timer = duration;
          }

        }, 1000);
    }

    window.onload = function () {

      var twentyMinutes = 60 * 20,
      display = document.querySelector('#timer');
      startTimer(twentyMinutes, display);

    };
` 
const codes = `
        def max_subarray_sum(nums):
            """
            Finds the maximum sum of any contiguous subarray of the given list.
            """
            if not nums:
                return 0
                
            max_sum = current_sum = nums[0]
                
            for num in nums[1:]:
                current_sum = max(num, current_sum + num)
                max_sum = max(max_sum, current_sum)
                
            return max_sum`

  return (
    <div className="App">
      <div style={{maxWidth: '600px', margin: 'auto', height: 'auto', borderRadius: '10px'}}>
        <Header language='Javascript' />
        <SyntaxHighlighter style={stackoverflowDark} language='javascript' useInlineStyles={true} className='container'>
          {testing}
        </SyntaxHighlighter>
      </div>

      <div style={{ maxWidth: '600px', margin: 'auto', height: 'auto', borderRadius: '10px' }}>
        <Header language='Python' />
        <SyntaxHighlighter style={stackoverflowDark} language='python' className='container' >
          {codes}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default App


const counting = () => {

}
