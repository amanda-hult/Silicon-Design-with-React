import React, { useState } from 'react'

function FaqList() {
  const questions = [
  {
    id: 1,
    question: 'Is any of my personal information stored in the App?',
    answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.'
  },
  {
    id: 2,
    question: 'What formats can I download my transaction history in?',
    answer: 'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.'
  },
  {
    id: 3,
    question: 'Can I schedule future transfers?',
    answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
  },
  {
    id: 4,
    question: 'When can I use Banking App services?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa aut maxime veritatis ipsum. Sit, consectetur. Ad asperiores incidunt optio autem. Vel, molestiae minima consequuntur commodi beatae fugit nihil nisi. Corporis, inventore? Praesentium impedit, vitae, dolore, inventore deserunt a qui minus corrupti esse voluptas expedita. Similique esse officiis consequuntur inventore!'
  },
  {
    id: 5,
    question: 'Can I create my own password that is easy for me to remember?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, neque praesentium. Voluptatibus dicta, ipsam, cupiditate necessitatibus, aliquid id quas dignissimos quis sequi incidunt eaque unde. Rerum magni odio vero veniam!'
  },
  {
    id: 6,
    question: 'What happens if I forget or lose my password?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores perspiciatis facilis est quod doloribus ipsum voluptatibus, tempore placeat omnis nulla odit odio id at quaerat recusandae. Obcaecati accusantium eos fugit ullam placeat ratione architecto sunt, quam sapiente cum unde quas velit commodi dolor iure voluptatum porro? Earum, aperiam veniam deserunt sunt quibusdam praesentium quod blanditiis vel, repudiandae nemo quasi dicta ipsam natus omnis! Dolores optio maxime odit iste dolore aspernatur a ducimus maiores explicabo.'
  },
];

  const [expanded, setExpanded] = useState([]);

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
            <h3 className="m-font bold">{question.question}</h3>
            <span className={expanded.includes(question.id) ? 'close active' : 'open active'}>
              <i className={expanded.includes(question.id) ? 'arrow-up fa-regular fa-angle-down fa-flip-vertical' : 'arrow-down fa-regular fa-angle-down'}></i>
            </span>
          </div>

          {expanded.includes(question.id) && (
            <div className="answer s-font" style={{ display: 'block'}}>
            <p>{question.answer}</p>
          </div>)}
        </div>
      ))}
    </div>
  );
}

export default FaqList