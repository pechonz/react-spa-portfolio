import React, {Component} from 'react';

class Skill extends Component {
  render() {
    return (
        <div id="skill">
            <div class="condiv home"><h1 data-aos="fade-up">Skills</h1></div>
            <div class="containerskill">
              <div class="flex-item-left">
              <div class="headskill" data-aos="fade-up">Programming Language</div>
              <div data-aos="fade-up"><p1><b>Java | C | C# | Javascript | HTML | CSS | Python | Visual Basic</b></p1></div>
              </div>
              <div class="flex-item-mid">
              <div class="headskill" data-aos="fade-up">Database</div>
              <div data-aos="fade-up"><p1><b>Oracle | SQL | MySQL</b></p1></div>  
              </div>
              <div class="flex-item-right">
              <div class="headskill" data-aos="fade-up">Develop Tools</div>
              <div data-aos="fade-up"><p1><b>Visual Studio | Visual Studio Code | Sublime Text | Github</b></p1></div>
              </div>
            </div>

            <div class="containerskill">
              <div class="flex-item-left">
              <div class="headskill" data-aos="fade-up">Language</div>
              <div data-aos="fade-up"><p1><b>Thai | English</b></p1></div>
              </div>
              <div class="flex-item-mid">
              <div class="headskill" data-aos="fade-up">Soft Skills</div>
              <div data-aos="fade-up"><p1><b>Problem Solver | Fast Learner | Human relations | Analytical thinking | Adaptation to the environment | Creative | Responsibility | Leadership</b></p1></div>
              </div>
              <div class="flex-item-right">
              <div class="headskill" data-aos="fade-up">Design Skills</div>
              <div data-aos="fade-up"><p1><b>Photoshop | Lightroom | Premiere Pro | After Effect | Audition</b></p1></div>
              </div>
            </div>

            <div class="containerskill">
              <div class="flex-item-mid">
              <div class="headskill" data-aos="fade-up">Framwork</div>
              <div data-aos="fade-up"><p1><b> .NET | Bootstrap | jQuery | React | Codeigniter</b></p1></div>
              </div>
              <div class="flex-item-mid">
              <div class="headskill" data-aos="fade-up">Extra Skills</div>
              <div data-aos="fade-up"><p1><b>IT Support | Photography</b></p1></div>
              </div>
            </div>
            <br></br>
        </div>
    );
  }
}
export default Skill;