import Link from 'next/link';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={dracula}>
        {value}
      </SyntaxHighlighter>
    );
};

const ListItem = ({ children }) => {
  if (Array.isArray(children)) {
    return (
        <ul className='list-disc pl-5 mb-2'>
            {children.map((item, index) => (
                <li key={index} className='mb-1'>
                    {item}
                </li>
            ))}
        </ul>
    );
}
  return <li className='mb-1'>{children}</li>;
};


const SubSection = ({ title, children }) => {
    return (
        <div className="mb-5 ml-4">
            {title && <h3 className='border-b pb-1 font-medium'>{title}</h3>}
            {children}
        </div>
    );
};


const Section = ({ title, children }) => {
  return (
    <div className="mb-10">
      {title && <h2 className='border-b pb-2 mb-4 font-semibold'>{title}</h2>}
      {children}
    </div>
  );
};


const GSOCGuide = () => {
    return (
        <div className=" leading-relaxed p-5 max-w-6xl mx-auto">
             <h1 className="mb-5 font-bold text-2xl md:text-3xl text-center">
            <Link href="https://summerofcode.withgoogle.com/" target="_blank" className='font-bold underline hover:no-underline'>
                Google Summer of Code (GSoC)
             </Link>
           </h1>
           <hr className="border-t border-gray-300 my-4" />

             <Section title="Fundamental Knowledge">
            <SubSection title="What is Open Source?">
                <div >
                    <h4 className='border-b pb-1 font-medium'>1. Source Code Availability:</h4>
                    <p className='mb-4'>
                        The source code of the software is freely accessible. This allows anyone to inspect how the software works, modify it to suit their needs, and share those modifications with others.
                    </p>
                     <h4 className='border-b pb-1 font-medium'>2. Licensing:</h4>
                    <p className='mb-4'>
                        Open source software is typically distributed under licenses that comply with the Open Source Definition. These licenses grant users the rights to use, modify, and distribute the software.
                    </p>
                    <p className='mb-4'>
                         <a href="https://en.wikipedia.org/wiki/List_of_free-and-open-source_software_packages" target="_blank" rel="noopener noreferrer">
                             List of Free and Open Source Softwares
                         </a>
                    </p>
                </div>
           </SubSection>


            <SubSection title="Philosophy behind Open Source:">
                <p>
                    The main philosophy of open-source products is the freedom to think, create, learn, and share. It is a collaborative effort of many developers who are working together to create something amazing. In the early phases of technology, open source helps the technology to not become handicapped by some big entities and is developed by people who really have the passion to make that piece of technology better.
                </p>
            </SubSection>
          </Section>


             <Section title="Pre-requisites for contributing in Open-Source">
             <SubSection title="1. Basic Technical Skills">
                <div >
                    <h4 className='border-b pb-1 font-medium'>Programming Knowledge</h4>
                    <p className='mb-4'>
                        Proficiency in at least one programming language. The language will depend on the project you want to contribute to (e.g., Python for Python projects, JavaScript for web projects).
                    </p>
                     <h4 className='border-b pb-1 font-medium'>Version Control</h4>
                     <p className='mb-4'>
                         Familiarity with Git and GitHub (or GitLab, Bitbucket) for version control and collaboration.
                     </p>
                     <h4 className='border-b pb-1 font-medium'>Learn basic Git commands:</h4>
                    <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'>
                             <code>clone</code>, <code>commit</code>, <code>push</code>, <code>pull</code>, <code>branch</code>, <code>merge</code>. Understand how to fork a repository and create pull requests.
                        </li>
                        <li className='mb-1'>
                            If someone wants to learn how contribution in Github works, They can contribute to this
                             <a href="https://github.com/Syknapse/Contribute-To-This-Project" target="_blank" rel="noopener noreferrer">
                               Training Repository
                             </a>.
                        </li>
                        <li className='mb-1'>
                             The aforementioned resource contains every step with screenshots to help one become familiar with the concept of pull requests and open source contributions.
                        </li>

                    </ul>
                     <h4 className='border-b pb-1 font-medium'>Development Environment</h4>
                      <p className='mb-4'>
                        Ability to set up a development environment on your local machine. This includes installing necessary software, libraries, and tools.
                        <ul className='list-disc pl-5 mb-2'>
                            <li className='mb-1'>Integrated Development Environment (IDE) or text editor (e.g., VS Code, PyCharm, Eclipse etc.).</li>
                            <li className='mb-1'>Dependency managers (e.g., npm for JavaScript, pip for Python).</li>
                            <li className='mb-1'>Containerization tools like Docker (if the project uses it).</li>
                        </ul>
                    </p>
                </div>
            </SubSection>

            <SubSection title="2. Soft Skills">
                <ul className='list-disc pl-5 mb-2'>
                    <li className='mb-1'>
                         <b>Communication</b>: Good written communication skills to interact with project maintainers and other contributors. This includes writing clear commit messages, pull request descriptions, and comments on issues.
                     </li>
                      <li className='mb-1'>
                          <b>Patience and Persistence</b>: Open source contributions may require multiple iterations and feedback cycles. Be prepared to iterate and improve your work based on feedback.
                    </li>
                 </ul>
              </SubSection>

            <SubSection title="3. Communicating with Mentors and Project-Leaders">
               <p className='mb-4'>
                    Communicating through Emails, Slack and other methods is a huge part in getting yourself recognised and being efficient in contributing to the project.
                    It is also a huge learning oppurtunity if you are able to work in someone with way more experience with professional programming and universal code ethics.
                </p>
                <ul className='list-disc pl-5 mb-2'>
                    <li className='mb-1'><b>Seeking Help</b>: Know where to find assistance when needed.</li>
                    <li className='mb-1'><b>Learning from Feedback</b>: Respond well to feedback and use it to improve.</li>
                    <li className='mb-1'><b>Teamwork</b>: Capable of working both independently and collaboratively in a team.</li>
                    <li className='mb-1'><b>Effective Communication</b>: Ability to communicate clearly and effectively.</li>
                    <li className='mb-1'><b>Asking Questions</b>: Know when to ask questions to clarify doubts or issues.</li>
                    <li className='mb-1'><b>Respect for Others</b>: Respect and consider other people's opinions and feedback.</li>
                </ul>
            </SubSection>

            <SubSection title="4. Naming Branches and Writing Commit Messages">

              <h4 className='border-b pb-1 font-medium'>Branch Naming Conventions</h4>
                    <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'>
                            <b>Feature Branches</b>: For new features or enhancements.
                              <ul className='list-disc pl-5 mb-2'>
                                    <li className='mb-1'>Example: <code>feature/add-user-authentication</code></li>
                                    <li className='mb-1'>Example: <code>feature/update-dashboard-ui</code></li>
                              </ul>
                        </li>
                         <li className='mb-1'>
                           <b>Bug Fix Branches</b>: For bug fixes.
                              <ul className='list-disc pl-5 mb-2'>
                                  <li className='mb-1'>Example: <code>bugfix/fix-login-issue</code></li>
                                   <li className='mb-1'>Example: <code>bugfix/correct-calculation-error</code></li>
                              </ul>
                        </li>
                         <li className='mb-1'>
                           <b>Improvement Branches</b>: For code improvements or refactoring.
                              <ul className='list-disc pl-5 mb-2'>
                                   <li className='mb-1'>Example: <code>improvement/refactor-user-service</code></li>
                                   <li className='mb-1'>Example: <code>improvement/optimize-db-queries</code></li>
                              </ul>
                         </li>
                        <li className='mb-1'>
                           <b>Hotfix Branches</b>: For urgent fixes.
                                <ul className='list-disc pl-5 mb-2'>
                                     <li className='mb-1'>Example: <code>hotfix/patch-security-vulnerability</code></li>
                                     <li className='mb-1'>Example: <code>hotfix/update-dependencies</code></li>
                                </ul>
                        </li>
                   </ul>

                    <h4 className='border-b pb-1 font-medium'>Writing Commit Messages</h4>
                      <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'>
                            <b>Structure</b>: Use a short summary, followed by a blank line, and a detailed description if necessary.
                           <CodeBlock language="text" value='Short summary (50 characters or less)

                            Detailed explanation of the changes, reasons, and references to issues if applicable.
                           '/>
                       </li>
                         <li className='mb-1'>
                            <b>Examples</b>:
                            <ul className='list-disc pl-5 mb-2'>
                                <li className='mb-1'>
                                    <b>Feature Addition</b>:
                                    <CodeBlock language="text" value='Add user authentication feature

                                    Implement user login and registration with JWT authentication.
                                    Update the user model and add corresponding routes and tests.'/>

                                </li>
                                 <li className='mb-1'>
                                     <b>Bug Fix</b>:
                                    <CodeBlock language="text" value='Fix login issue when username contains spaces

                                    Corrected the regex used for validating usernames to allow spaces.
                                    Updated the login form to trim whitespace before submission.'/>
                                </li>
                                 <li className='mb-1'>
                                     <b>Code Improvement</b>:
                                    <CodeBlock language="text" value='Refactor user service for better readability

                                    Split the user service into smaller functions for better maintainability.
                                    Add comments and update documentation.'/>
                                </li>
                                <li className='mb-1'>
                                     <b>Hotfix</b>:
                                    <CodeBlock language="text" value='Patch security vulnerability in password hashing

                                    Upgrade the password hashing library to the latest version to address
                                    the identified vulnerability. Update existing tests to ensure compatibility.'/>
                                </li>
                            </ul>
                        </li>
                   </ul>
                    <h4 className='border-b pb-1 font-medium'>Best Practices For Commit Messages</h4>

                         <ul className='list-disc pl-5 mb-2'>
                            <li className='mb-1'><b>Be Clear and Concise</b>: Summarize the changes in the subject line and provide additional details in the body if necessary.</li>
                            <li className='mb-1'><b>Use the Imperative Mood</b>: Write the subject line as if you're giving an order, e.g., "Fix bug" instead of "Fixed bug".</li>
                           <li className='mb-1'><b>Reference Issues</b>: If applicable, reference the issue number that the commit addresses, e.g., "Fix login issue #123".</li>
                            <li className='mb-1'><b>Separate Concerns</b>: Make sure each commit contains related changes and is not too large. This makes it easier to review and revert if necessary.</li>
                         </ul>
          </SubSection>
        </Section>

        <Section title="General Guide for Good Code Formatting and Linting">
               <p className='mb-4'>
                    Proper code formatting and linting practices help maintain code quality, readability, and consistency across projects.
                </p>
                 <p className='mb-4'>
                     Some points to remember for good code consistency and quality:
                </p>

               <SubSection title="1. Consistent Indentation">
                      <ul className='list-disc pl-5 mb-2'>
                           <li className='mb-1'>Use spaces for indentation (typically 2 or 4 spaces per indent).</li>
                           <li className='mb-1'>Choose either spaces or tabs consistently throughout your codebase.</li>
                           <li className='mb-1'>Configure your editor to automatically convert tabs to spaces.</li>
                      </ul>
               </SubSection>
               <SubSection title="2. Naming Conventions">
                    <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'>Follow language-specific naming conventions (e.g., PEP 8 for Python).</li>
                          <li className='mb-1'>Use descriptive names for variables, functions, classes, and methods.</li>
                          <li className='mb-1'>Avoid cryptic abbreviations; favor clarity and readability.</li>
                   </ul>
                </SubSection>
               <SubSection title="3. Line Length and Wrapping">
                    <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'>Limit lines to a maximum of 80-120 characters.</li>
                          <li className='mb-1'>Break long lines into multiple lines to improve readability.</li>
                          <li className='mb-1'>Use parentheses for line continuation in languages like Python.</li>
                   </ul>
               </SubSection>
                <SubSection title="4. Code Organization">
                      <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'>Structure code logically with consistent spacing and blank lines.</li>
                          <li className='mb-1'>Group related functions and classes together.</li>
                           <li className='mb-1'>Use comments and docstrings to explain complex code sections and functions.</li>
                   </ul>
                </SubSection>

               <SubSection title="5. Consistent Code Style">
                   <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'>Adhere to a consistent code style guide (e.g., PEP 8 for Python, Google Style Guide for JavaScript).</li>
                        <li className='mb-1'>Use automated tools like linters and formatters to enforce style guidelines.</li>
                    </ul>
                </SubSection>
               <SubSection title="6. Linting Tools">
                  <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'>
                            <b>Linters</b>: Use linters to analyze code for potential errors, bugs, and stylistic issues.
                                <ul className='list-disc pl-5 mb-2'>
                                     <li className='mb-1'>Examples: <code>pylint</code> for Python, <code>eslint</code> for JavaScript.</li>
                                </ul>
                        </li>
                       <li className='mb-1'>Configure linters to run automatically on code changes or before commits.</li>
                   </ul>
               </SubSection>
               <SubSection title="7. Automated Formatting">
                    <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'>
                           <b>Formatters</b>: Use code formatters to automatically enforce style guidelines and formatting rules.
                            <ul className='list-disc pl-5 mb-2'>
                                 <li className='mb-1'>Examples: <code>black</code> for Python, <code>prettier</code> for JavaScript.</li>
                             </ul>
                         </li>
                         <li className='mb-1'>Integrate formatters into your editor or CI/CD pipeline for consistent formatting.</li>
                    </ul>
               </SubSection>
                <SubSection title="8. Version Control Integration">
                   <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'>Commit formatted code only; avoid mixing formatting changes with functional changes.</li>
                       <li className='mb-1'>Use Git hooks to automatically run linters and formatters before committing or pushing changes.</li>
                  </ul>
               </SubSection>
                <SubSection title="9. Code Reviews">
                    <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'>Incorporate linting and formatting checks into code review processes.</li>
                      <li className='mb-1'>Discuss and resolve style inconsistencies as part of code review feedback.</li>
                   </ul>
               </SubSection>
               <SubSection title="10. Continuous Improvement">
                    <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'>Regularly update and refine coding standards based on project needs and community best practices.</li>
                       <li className='mb-1'>Encourage team members to contribute to and follow code formatting and linting guidelines.</li>
                   </ul>
                </SubSection>
           <p className='mb-4'>
                  By following these guidelines, you can maintain clean, readable code that enhances collaboration and reduces maintenance overhead in your projects.
           </p>
        </Section>

        <Section title="Reading Documentation of GSoC Projects and Handling Large Codebases">
              <p className='mb-4'>
                    Understanding the documentation of Google Summer of Code (GSoC) projects and effectively navigating large codebases are essential skills for successful contributions.
              </p>
            <SubSection title="1. Understanding Documentation">
                 <ul className='list-disc pl-5 mb-2'>
                    <li className='mb-1'><b>Start with the README</b>: The README file provides an overview of the project, its purpose, installation instructions, and basic usage.</li>
                     <li className='mb-1'><b>Contribution Guidelines</b>: Review the CONTRIBUTING.md file or section in the README for guidelines on how to contribute effectively.</li>
                    <li className='mb-1'><b>Project Structure</b>: Understand the organization of the codebase, including main directories, modules, and important files.</li>
                </ul>
            </SubSection>
             <SubSection title="2. Navigating Large Codebases">
                    <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'><b>Search Functionality</b>: Use the search functionality in your code editor or IDE to quickly locate files, functions, and variables.</li>
                         <li className='mb-1'><b>Directory Structure</b>: Familiarize yourself with the directory structure to understand where different components of the project are located.</li>
                          <li className='mb-1'><b>Module Dependencies</b>: Identify dependencies between modules or packages to understand how different parts of the code interact.</li>
                    </ul>
              </SubSection>
               <SubSection title="3. Code Documentation">
                    <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'><b>Inline Comments</b>: Pay attention to inline comments that explain specific sections of code or provide context for complex algorithms.</li>
                       <li className='mb-1'><b>Docstrings</b>: Look for docstrings in functions, classes, and methods that describe their purpose, parameters, and return values.</li>
                       <li className='mb-1'><b>API Documentation</b>: If the project includes APIs, review the API documentation to understand endpoints, request methods, and response formats.</li>
                    </ul>
               </SubSection>
            <SubSection title="4. Handling Complexity">
                    <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'><b>Break Down Tasks</b>: Break down large tasks into smaller, manageable sub-tasks to tackle them incrementally.</li>
                        <li className='mb-1'><b>Code Reviews</b>: Utilize code reviews to gain insights from experienced contributors and ensure code quality.</li>
                        <li className='mb-1'><b>Version Control</b>: Use version control effectively to track changes, revert to previous versions if needed, and collaborate with other contributors.</li>
                    </ul>
            </SubSection>
            <SubSection title="5. Tools and Techniques">
                    <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'><b>Debugger</b>: Use a debugger to step through code execution, inspect variables, and understand control flow.</li>
                        <li className='mb-1'><b>Code Analysis Tools</b>: Employ static code analysis tools to identify potential issues, improve code quality, and enforce coding standards.</li>
                       <li className='mb-1'><b>Profiling Tools</b>: Use profiling tools to analyze code performance and identify bottlenecks in large codebases.</li>
                   </ul>
            </SubSection>
             <SubSection title="6. Communication and Collaboration">
                    <ul className='list-disc pl-5 mb-2'>
                       <li className='mb-1'><b>Ask for Clarification</b>: Don’t hesitate to ask questions on project communication channels (e.g., Slack, mailing lists) to clarify doubts about project structure or functionality.</li>
                       <li className='mb-1'><b>Collaborative Tools</b>: Use collaborative tools like issue trackers (e.g., GitHub Issues) and project management boards (e.g., Trello, JIRA) to coordinate efforts and track progress.</li>
                    </ul>
            </SubSection>
             <SubSection title="7. Continuous Learning">
                    <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'><b>Stay Updated</b>: Regularly review project updates, new features, and changes in the codebase.</li>
                       <li className='mb-1'><b>Expand Knowledge</b>: Continuously expand your knowledge of relevant technologies, frameworks, and best practices through online courses, tutorials, and documentation.</li>
                    </ul>
            </SubSection>
             <p className='mb-4'>
                By following these guidelines, you can effectively read and navigate the documentation of GSoC projects and handle large codebases to make meaningful contributions during your GSoC journey.
            </p>
      </Section>

      <Section title="Finding an Open Source Project to Contribute">
          <p className='mb-4'>
            Identifying a project to contribute to is a crucial step in your open source journey. Here are some effective methods to find a project that aligns with your interests:
          </p>

           <SubSection title="Identify Your Passionate Projects">
                   <ul className='list-disc pl-5 mb-2'>
                      <li className='mb-1'>
                        <b>Daily Use</b>: Consider projects you use frequently in your daily life. You are likely passionate about improving features or fixing issues that affect you directly.
                      </li>
                   </ul>
           </SubSection>
            <SubSection title="Utilize Online Platforms">
                    <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'>
                            <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                                 <b>Google Summer of Code (GSoC) Website</b>
                            </a>
                             <ul className='list-disc pl-5 mb-2'>
                                  <li className='mb-1'>Explore organizations that work on technologies you're passionate about.</li>
                                   <li className='mb-1'>Search for projects aligned with your interests and skills.</li>
                             </ul>
                         </li>
                        <li className='mb-1'>
                            <a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">
                                 <b>GitHub Explore</b>
                             </a>
                              <ul className='list-disc pl-5 mb-2'>
                                   <li className='mb-1'>Browse trending repositories and topics related to your passion.</li>
                              </ul>
                        </li>
                       <li className='mb-1'>
                         <a href="https://github.com/features/issues" target="_blank" rel="noopener noreferrer">
                            <b>GitHub Issues</b>
                        </a>
                           <ul className='list-disc pl-5 mb-2'>
                              <li className='mb-1'> Use GitHub's powerful issue search tool to find projects with good first issues or specific topics.</li>
                            </ul>
                        </li>
                        <li className='mb-1'>
                            <a href="https://opensourcefriday.com/" target="_blank" rel="noopener noreferrer">
                                <b>Open Source Friday</b>
                            </a>
                        </li>
                         <li className='mb-1'>
                            <a href="https://firsttimersonly.com/" target="_blank" rel="noopener noreferrer">
                                <b>First Timers Only</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://codetriage.com/" target="_blank" rel="noopener noreferrer">
                                <b>CodeTriage</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://24pullrequests.com/" target="_blank" rel="noopener noreferrer">
                                 <b>24 Pull Requests</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://up-for-grabs.net/#/" target="_blank" rel="noopener noreferrer">
                                <b>Up for Grabs</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://firstcontributions.github.io/" target="_blank" rel="noopener noreferrer">
                                <b>First Contributions</b>
                            </a>
                        </li>
                       <li className='mb-1'>
                           <a href="https://web.archive.org/web/20201111233803/https://www.sourcesort.com/" target="_blank" rel="noopener noreferrer">
                              <b>Source Sort</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://opensauced.pizza/" target="_blank" rel="noopener noreferrer">
                                <b>OpenSauced</b>
                            </a>
                        </li>
                        <li className='mb-1'>
                            <a href="https://ovio.org/" target="_blank" rel="noopener noreferrer">
                                <b>Ovio - </b>
                             </a>
                             <a href="https://ovio.org/issues" target="_blank" rel="noopener noreferrer">
                                  For finding good first issues use this link.
                             </a>
                        </li>
                    </ul>
            </SubSection>
          <SubSection title="Community Engagement">
               <ul className='list-disc pl-5 mb-2'>
                  <li className='mb-1'>
                        <b>Welcoming Communities</b>:
                        <ul className='list-disc pl-5 mb-2'>
                            <li className='mb-1'>
                                 Join communities known for welcoming new contributors, such as those listed on
                                  <a href="https://opensourcefriday.com/" target="_blank" rel="noopener noreferrer">
                                       Open Source Friday
                                  </a>
                                  ,
                                 <a href="https://firsttimersonly.com/" target="_blank" rel="noopener noreferrer">
                                       First Timers Only
                                  </a>
                                  , and
                                <a href="https://codetriage.com/" target="_blank" rel="noopener noreferrer">
                                    CodeTriage
                                </a>
                                .
                            </li>
                        </ul>
                  </li>
                   <li className='mb-1'>
                       <b>Events and Initiatives</b>:
                         <ul className='list-disc pl-5 mb-2'>
                             <li className='mb-1'>Participate in initiatives like 24 Pull Requests, Up For Grabs, and First Contributions.</li>
                         </ul>
                  </li>
               </ul>
        </SubSection>
        <SubSection title="Resources">
            <ul className='list-disc pl-5 mb-2'>
                 <li className='mb-1'>
                      <b>Open Source Guides</b>:
                         <ul className='list-disc pl-5 mb-2'>
                             <li className='mb-1'>
                                Visit freeCodeCamp's guide on
                                 <a href="https://github.com/freeCodeCamp/how-to-contribute-to-open-source" target="_blank" rel="noopener noreferrer">
                                        how to contribute to open source
                                  </a>
                                 for comprehensive resources.
                            </li>
                         </ul>
                  </li>
              </ul>
        </SubSection>
   </Section>


      <Section title="Timeline Roadmap">
           <SubSection title="1. Understanding GSoC (June - July)">
              <ul className='list-disc pl-5 mb-2'>
                   <li className='mb-1'>
                         <b>Research GSoC</b>:
                         Read the
                           <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                               Google Summer of Code Official Website
                           </a>
                         to understand the program's structure, goals, and timelines.
                    </li>
                     <li className='mb-1'>
                         <b>Attend the Weekly Calls and Chats</b>: Get yourself familiar with the server,chat with fellow members to discuss GSOC approaches and collaboration for project ideas, also attend the weekly calls to connect with past participants and mentors.
                     </li>
                </ul>
          </SubSection>
           <SubSection title="2. Skill Development (July - September)">
                    <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'><b>Identify Your Strengths and Weaknesses</b>: Determine which programming languages and frameworks you need to improve.</li>
                         <li className='mb-1'><b>Learn the Basics</b>: If you're new to open source, learn about version control systems like Git and collaboration tools like GitHub or GitLab.</li>
                          <li className='mb-1'>
                              <b>Practice Coding</b>: Work on coding challenges on platforms like
                            <a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer">
                                LeetCode
                             </a>
                             ,
                             <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">
                                  HackerRank
                             </a>
                            , or
                            <a href="https://www.codeforces.com" target="_blank" rel="noopener noreferrer">
                                Codeforces
                            </a>
                             to improve your problem-solving skills.
                         </li>
                          <li className='mb-1'>
                               Advanced members can practice by participating in other open source events and projects of thier own to brush up thier skills.
                         </li>
                          <li className='mb-1'>
                              Project ideas and people that are willing to contribute can be found in the
                                 <code>#project-ideas</code> channel of the server.
                           </li>
                           <li className='mb-1'>
                               Ongoing projects include
                                 <a href="https://github.com/ayushsharma74/stream-pulse" target="_blank" rel="noopener noreferrer">
                                    Stream Pulse
                                 </a>
                                by Ayush.
                           </li>
                           <li className='mb-1'>
                               Use
                                <code>#project-ideas</code> to promote contribution on your own project or to propose a project idea to server members.
                           </li>
                     </ul>
          </SubSection>
           <SubSection title="3. Explore Organizations (October - November)">
               <ul className='list-disc pl-5 mb-2'>
                      <li className='mb-1'>
                            <b>List of Organizations</b>: Review the list of participating organizations from previous years to get an idea of which organizations might participate again.
                         </li>
                          <li className='mb-1'>
                            A complete comprehensive list of the past programs can be found
                             <a href="https://www.gsocorganizations.dev" target="_blank" rel="noopener noreferrer">
                                here
                              </a>
                               .
                           </li>
                         <li className='mb-1'><b>Match Interests</b>: Identify organizations that align with your interests and skill set.</li>
                          <li className='mb-1'>
                               <b>Contribute to Projects</b>: Start contributing to the projects of these organizations. This can be through fixing bugs, adding features, or improving documentation -
                                <i>(while updating the documentation, refrain from making unnecessary changes and changes that are not meaningful)</i>.
                           </li>
                </ul>
           </SubSection>
           <SubSection title="4. Deep Dive into Selected Organizations (December - January)">
                <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'><b>Understand the Projects</b>: Read about the projects that interest you, understand their goals, and look at their codebase.</li>
                        <li className='mb-1'>
                            <b>Engage with the Community</b>: Join the IRC channels, Slack groups,Discord servers, or mailing lists of these organizations. Introduce yourself and ask questions.
                        </li>
                         <li className='mb-1'>
                             Use
                            <a href="https://google.github.io/gsocguides/student/communication-best-practices" target="_blank" rel="noopener noreferrer">
                             This
                             </a>
                              Guide here to follow the best practices for professional and respectful communication in GSOC communities.
                         </li>
                       <li className='mb-1'><b>Contribute Actively</b>: Make meaningful contributions to the projects. This will help you build a rapport with the community and potential mentors.</li>
                  </ul>
           </SubSection>
            <SubSection title="5. Proposal Preparation (February - March)">
                 <ul className='list-disc pl-5 mb-2'>
                      <li className='mb-1'><b>Identify Potential Projects</b>: Review the list of projects proposed by the organizations.</li>
                      <li className='mb-1'><b>Draft Proposal</b>: Start drafting your project proposal. Include details like project objectives, timeline (Make sure to add timeline that fits according to your scenario), milestones, and your approach.</li>
                       <li className='mb-1'>
                           <b>Seek Feedback</b>: Share your draft with mentors and the community for feedback. Refine your proposal based on their suggestions. DO NOT send your proposal without acceptance from mentors you'll be immediatly rejected
                       </li>
                       <li className='mb-1'><b>Prepare Backup Proposals</b>: It's a good idea to have more than one proposal in case your primary proposal is not selected.</li>
                  </ul>
            </SubSection>
            <SubSection title="6. Application Phase (March - April)">
                 <ul className='list-disc pl-5 mb-2'>
                        <li className='mb-1'><b>Submit Application</b>: Submit your final proposal through the GSoC website. Make sure it’s well-polished and error-free.</li>
                        <li className='mb-1'><b>Follow Up</b>: Keep in touch with the community and mentors. Answer any questions they might have about your proposal.</li>
                   </ul>
            </SubSection>
            <SubSection title="7. Pre-Coding Period (April - May)">
                 <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'><b>Community Bonding</b>: Use this time to bond with your organization. Understand their coding standards and workflow.</li>
                         <li className='mb-1'><b>Set Up Development Environment</b>: Ensure you have all the necessary tools and dependencies set up on your system eg. Docker, NodeJS, Python etc.</li>
                         <li className='mb-1'><b>Plan in Detail</b>: Break down your project into smaller tasks and create a detailed plan for the coding period.</li>
                   </ul>
            </SubSection>
            <SubSection title="8. Coding Period (May - August)">
            <ul className='list-disc pl-5 mb-2'>
                         <li className='mb-1'><b>Regular Updates</b>: Provide regular updates to your mentor and community. Use version control (Git, GitHub etc) effectively to track your progress.</li>
                         <li className='mb-1'><b>Stick to the Timeline</b>: Follow the timeline you proposed. If you encounter any issues, communicate them promptly.</li>
                         <li className='mb-1'><b>Testing</b>: Write tests for your code and ensure it integrates well with the existing codebase.</li>
                   </ul>
            </SubSection>
             <SubSection title="9. Final Evaluation (August)">
                 <ul className='list-disc pl-5 mb-2'>
                     <li className='mb-1'><b>Complete Documentation</b>: Write detailed documentation for your project. This includes setup guides, user manuals, and developer guides.</li>
                    <li className='mb-1'><b>Final Submission</b>: Submit your completed project for final evaluation. Ensure all your code is merged and documented.</li>
                      <li className='mb-1'><b>Prepare for Demo</b>: Be ready to present your work to the community and mentors.</li>
                   </ul>
            </SubSection>
            <SubSection title="10. Post-GSoC (September and beyond)">
                <ul className='list-disc pl-5 mb-2'>
                    <li className='mb-1'><b>Reflect</b>: Reflect on your experience. Note down what you learned and areas for improvement.</li>
                    <li className='mb-1'><b>Continue Contributing</b>: If possible, continue contributing to the organization. This can lead to long-term collaboration.</li>
                   <li className='mb-1'><b>Share Your Experience</b>: Write a blog post or give a talk about your GSoC journey. This can help future participants.</li>
                </ul>
            </SubSection>
            <SubSection title="Additional Tips">
                <ul className='list-disc pl-5 mb-2'>
                      <li className='mb-1'><b>Time Management</b>: Balance your GSoC preparations with other commitments. Set aside regular time for open-source contributions.</li>
                    <li className='mb-1'><b>Networking</b>: Build connections with fellow GSoC participants. They can provide support and feedback.</li>
                   <li className='mb-1'><b>Learning Resources</b>: Utilize online courses, tutorials, and books to enhance your skills.</li>
                </ul>
             </SubSection>
             <p className="mt-4">And Thats it for this Roadmap, Routine improvements will be made to this notebook and contributions to this roadmap are also welcome.</p>
         </Section>
        </div>
    );
};

export default GSOCGuide;