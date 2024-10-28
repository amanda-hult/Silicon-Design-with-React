import React, { useEffect, useState } from 'react'

function FaqList() {

  const [questions, setQuestions] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch ('https://win24-assignment.azurewebsites.net/api/faq');
      if (!resp.ok) throw new Error("Network response was not ok");
      const data = await resp.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  const showAnswer = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(item => item !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  }
  
  return (
    <div className="faq-container m-tb-1">
      {questions.map((question) => (
        <div key={question.id}>
          <div className="question" onClick={() => showAnswer(question.id)}>
            <h3 className="m-font bold">{question.title}</h3>
            <span className={expanded.includes(question.id) ? 'close active' : 'open active'}>
              <i className={expanded.includes(question.id) ? 'arrow-up fa-regular fa-angle-down fa-flip-vertical' : 'arrow-down fa-regular fa-angle-down'}></i>
            </span>
          </div>

          {expanded.includes(question.id) && (
            <div className="answer s-font" style={{ display: 'block'}}>
            <p>{question.content}</p>
          </div>)}
        </div>
      ))}
    </div>
  );
}

export default FaqList