const videos = [
  {
    id: 1,
    cat: "webDevelopment",
    name: "web development",
    children: [
      {
        id: 2,
        name: "frontend",
        title: "frontend",
        vids: [
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/world-wide-web.png",
            title:
              "Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript & More",
            subtitle:
              "In this series, we will learn about Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript & More",
            course: "web-development-in-hindi-1",
            videos: [
              {
                vidURL:
                  "https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=1",
                vidTitle:
                  "Introduction to HTML, CSS, JavaScript & How websites work? | Web Development Tutorials #1"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=TeZdo8mx0gc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=2",
                vidTitle:
                  "HTML Tutorial: Installing VS Code & Live Server | Web Development Tutorials #2"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=IA8JWGP13dI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=3",
                vidTitle:
                  "HTML Tutorial: Basic Structure of a Website | Web Development Tutorials #3"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=EZCc_4abdcE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=4",
                vidTitle:
                  "HTML Tutorial: Title, Script, Link & Meta Tags | Web Development Tutorials #4"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ulv_q6-b7uI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=5",
                vidTitle:
                  "HTML Tutorial: Headings & Paragraphs | Web Development Tutorials #5"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=z6H22xGAZEA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=6",
                vidTitle:
                  "HTML Tutorial: Img and Anchor tags | Web Development Tutorials #6"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=N69xumSjg5Q&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=7",
                vidTitle:
                  "HTML Tutorial: Lists and Tables | Web Development Tutorials #7"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=KqJikDzb3l4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=8",
                vidTitle:
                  "HTML Tutorial: Forms & Input Tags | Web Development Tutorials #8"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=DFT9qxVCF6k&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=9",
                vidTitle:
                  "HTML Tutorial: Inline & Block Elements | Web Development Tutorials #9"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=BucLTOfLQsk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=10",
                vidTitle:
                  "HTML Tutorial: Ids & Classes in HTML | Web Development Tutorials #10"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=gw1efv5WF_Q&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=11",
                vidTitle:
                  "HTML Tutorial: HTML Entities | Web Development Tutorials #11"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=FKfsmV6otEM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=12",
                vidTitle:
                  "HTML Tutorial: Semantic Tags in HTML| Web Development Tutorials #12"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ua24185-rcw&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=13",
                vidTitle:
                  "CSS Tutorial: Introduction to CSS | Web Development Tutorials #13"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ArUL-He_AN0&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=14",
                vidTitle:
                  "CSS Tutorial: Inline, Internal & External CSS | Web Development Tutorials #14"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=oPPym7UaSIo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=15",
                vidTitle:
                  "CSS Tutorial: Selectors in CSS | Web Development Tutorials #15"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=buxedopZbKM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=16",
                vidTitle:
                  "CSS Tutorial: Using Chrome Developer Tools | Web Development Tutorials #16"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=5Gz7j4gDrXM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=17",
                vidTitle:
                  "CSS Tutorial: Fonts In CSS | Web Development Tutorials #17"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=EEw5OJCsiDs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=18",
                vidTitle:
                  "CSS Tutorial: Colors In CSS | Web Development Tutorials #18"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=2zcHiaHo4Jo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=19",
                vidTitle:
                  "CSS Tutorial: Borders and Backgrounds | Web Development Tutorials #19"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=5koxb4JaDqc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=20",
                vidTitle:
                  "CSS Tutorial: CSS Box Model, Margin and Padding | Web Development Tutorials #20"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=6G42rXal5-g&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=21",
                vidTitle:
                  "CSS Tutorial: Float & Clear Explained | Web Development Tutorials #21"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=3lAl7RNqp1c&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=22",
                vidTitle:
                  "CSS Tutorial: Styling Links & Buttons | Web Development Tutorials #22"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=OsPOBsclJLU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=23",
                vidTitle:
                  "CSS Tutorial: Creating a Navigation Menu | Web Development Tutorials #23"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=YJtlXrzXXFk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=24",
                vidTitle:
                  "CSS Tutorial: CSS Display Property | Web Development Tutorials #24"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=MwGHiVl-gqk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=25",
                vidTitle:
                  "CSS Tutorial: Position absolute, relative, fixed and sticky in CSS | Web Development Tutorials #25"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=Sj5NX_br5WY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=26",
                vidTitle:
                  "Project 1: Creating a Gym Website Using HTML5 & CSS3 | Web Development Tutorials #26"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=Uzuq2FGxgK4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=27",
                vidTitle:
                  "CSS Tutorial: Visibility & z-index Explained | Web Development Tutorials #27"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=4ykmsTpIn08&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=28",
                vidTitle:
                  "CSS Flexbox Tutorial in Hindi | Web Development Tutorials #28"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=DVjrb52C5Gs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=29",
                vidTitle:
                  "CSS Tutorial: em, rem, vh and vw units + Responsive design Explained | Web Development Tutorials #29"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=WTz4A8IdeEQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=30",
                vidTitle:
                  "CSS Tutorial: Media Queries Explained | Web Development Tutorials #30"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=WwUM7qOimbo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=31",
                vidTitle:
                  "CSS Tutorial: More on CSS Selectors | Web Development Tutorials #31"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=P-hZDC5YkJE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=32",
                vidTitle:
                  "CSS Tutorial: Attribute & nth child pseudo Selectors | Web Development Tutorials #32"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=PlKG1fooswU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=33",
                vidTitle:
                  "CSS Tutorial: Before and After Pseudo Selectors | Web Development Tutorials #33"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ASNldCkFBcM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=34",
                vidTitle:
                  "CSS Tutorial: Box Shadow and Text Shadow | Web Development Tutorials #34"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ghlm_94oR90&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=35",
                vidTitle:
                  "CSS Tutorial: Variables & Custom Properties | Web Development Tutorials #35"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=jiK6Mf-ILSg&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=36",
                vidTitle:
                  "CSS Tutorial: Creating Animations & Keyframes | Web Development Tutorials #36"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=k4Dr0PJKidI&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=37",
                vidTitle:
                  "CSS Tutorial: Creating Transitions in CSS | Web Development Tutorials #37"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=K0Gz7CKNJzY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=38",
                vidTitle:
                  "CSS Tutorial: Transform property in CSS | Web Development Tutorials #38"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=8KVrdL0VcAk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=39",
                vidTitle:
                  "Creating Fully Responsive Website Project Using HTML & CSS  in Hindi | Web Development Tutorials #39"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=MPl9bevckUE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=40",
                vidTitle:
                  "CSS Grid: Introduction & Creating A Basic Grid | Web Development Tutorials #40"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=Aec0xLKzBWk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=41",
                vidTitle:
                  "CSS Grid: Creating Rows & Gaps in Grid | Web Development Tutorials #41"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=5II60I5gpKY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=42",
                vidTitle:
                  "CSS Grid: Spanning Multiple Rows and Columns in Grid | Web Development Tutorials #42"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=QAv7TsE18QM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=43",
                vidTitle:
                  "CSS Grid: Autofit & MinMax | Web Development Tutorials #43"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=JBupsN9Cmrs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=44",
                vidTitle:
                  "CSS Grid: Creating Layouts Using Grid Template Area | Web Development Tutorials #44"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=mu0qTVIkkAs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=45",
                vidTitle:
                  "Using Media Queries with CSS Grid | Web Development Tutorials #45"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=01GNWUuLbYk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=46",
                vidTitle:
                  "Introduction to JavaScript for Frontend & Backend | Web Development Tutorials #46"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=f5pG-uhsykk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=47",
                vidTitle:
                  "Writing in-browser JavaScript and Developer Console | Web Development Tutorials #47"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=xv82yODVXqo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=48",
                vidTitle:
                  "Variables, Data Types and Operators in JavaScript | Web Development Tutorials #48"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=cc8OOwqj258&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=49",
                vidTitle:
                  "Strings in JavaScript | Web Development Tutorials #49"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=wV8JB_L2smc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=50",
                vidTitle:
                  "String Functions in JavaScript | Web Development Tutorials #50"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=vBNo70N3EwU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=51",
                vidTitle:
                  "Scope, If-else Conditionals & Switch Case in JavaScript | Web Development Tutorials #51"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=-oVdqCaL3DQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=52",
                vidTitle:
                  "Arrays & Objects in JavaScript | Web Development Tutorials #52"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=SIHwNLrMXvU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=53",
                vidTitle:
                  "Functions in JavaScript | Web Development Tutorials #53"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=pdqXYAe1kKA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=54",
                vidTitle:
                  "JavaScript Tutorial: Interaction - Alert, Prompt, Confirm | Web Development Tutorials #54"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=tOqn-XxVFUM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=55",
                vidTitle:
                  "JavaScript Tutorial: for, while, forEach, Do While Loops | Web Development Tutorials #55"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=cEWLPtRhiio&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=56",
                vidTitle:
                  "JavaScript Tutorial: Navigating The DOM | Web Development Tutorials #56"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=d4PN2rJD98g&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=57",
                vidTitle:
                  "JavaScript Tutorial: Events & Listening to Events | Web Development Tutorials #57"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=yGU9DJ5TI8I&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=58",
                vidTitle:
                  "JavaScript Tutorial: setInterval & setTimeOut | Web Development Tutorials #58"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=6CJFCvSlKfs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=59",
                vidTitle:
                  "JavaScript Tutorial: Date & Time In JavaScript | Web Development Tutorials #59"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=OkFPMOudomg&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=60",
                vidTitle:
                  "JavaScript Tutorial: Arrow Functions In JavaScript | Web Development Tutorials #60"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=JwOROnOmuNQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=61",
                vidTitle:
                  "JavaScript Tutorial: Math Object In JavaScript | Web Development Tutorials #61"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ju5j7rfXXTE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=62",
                vidTitle:
                  "JavaScript Tutorial: Working with JSON in JavaScript | Web Development Tutorials #62"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=YFmgNiimfyk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=63",
                vidTitle:
                  "Backend Tutorial: Node.Js Introduction and Installation | Web Development Tutorials #63"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=eSh1FZDJEWU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=64",
                vidTitle:
                  "Backend Tutorial: Node.Js Modules with Examples | Web Development Tutorials #64"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=BVMjyLPAR0I&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=65",
                vidTitle:
                  "Backend Tutorial: Blocking vs Non-Blocking execution | Web Development Tutorials #65"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ALzoL4c4yGA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=66",
                vidTitle:
                  "Backend Tutorial: Serving HTML Files using NodeJs | Web Development Tutorials #66"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=bUVYHF6fRbo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=67",
                vidTitle:
                  "Backend Tutorial: Creating a Custom Backend Using NodeJs | Web Development Tutorials #67"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=-8vI4B60008&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=68",
                vidTitle:
                  "Backend Tutorial: Creating Custom Modules in Node Using NodeJs | Web Development Tutorials #68"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=YBwWGvdUbQU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=69",
                vidTitle:
                  "Backend Tutorial: npm: The Node Package Manager Tutorial | Web Development Tutorials #69"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=p7svrBmjZpc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=70",
                vidTitle:
                  "Backend Tutorial: Installing Express and Postman | Web Development Tutorials #70"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=gF9P93haajE&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=71",
                vidTitle:
                  "Backend Tutorial: Writing our first Express App | Web Development Tutorials #71"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=mgQ1vBZvMes&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=72",
                vidTitle:
                  "Backend Tutorial: Static Files & Installing Pug template engine | Web Development Tutorials #72"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=vl8HiAmslJQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=73",
                vidTitle:
                  "Backend Tutorial: Using raw HTML in Pug template engine | Web Development Tutorials #73"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=tiv5JTFqGps&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=74",
                vidTitle:
                  "Backend Tutorial: Finishing Off NodeJs Backend of our Gym Website | Web Development Tutorials #74"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=hUHggKykLsQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=75",
                vidTitle:
                  "Backend Tutorial: Dance Website Using Pure Pug + NodeJs | Web Development Tutorials #75"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=u0KGgzq0cJ8&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=76",
                vidTitle:
                  "Backend Tutorial: Designing Cards Using Pure Pug + NodeJs | Web Development Tutorials #76"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=OycU_qKU4vY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=77",
                vidTitle:
                  "Backend Tutorial: Continuing Dance Website using Pug + NodeJs | Web Development Tutorials #77"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=DvVY-n5uL_k&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=78",
                vidTitle:
                  "Backend Tutorial: Adding Sponsor Section using Pug + NodeJs | Web Development Tutorials #78"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=8nzQRTfNm8E&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=79",
                vidTitle:
                  "Backend Tutorial: Adding a Contact Form using Pug + NodeJs | Web Development Tutorials #79"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=_lLz56gRYe4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=80",
                vidTitle:
                  "MongoDb Tutorial: Introduction to MongoDb + Installation | Web Development Tutorials #80"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=0fbt9Q0vba4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=81",
                vidTitle:
                  "MongoDb Tutorial: Inserting data into the Mongo Database | Web Development Tutorials #81"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=7WXsu6JuaCY&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=82",
                vidTitle:
                  "MongoDb Tutorial: Searching/Querying data from the Mongo Database | Web Development Tutorials #82"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=7VTGl7zAKy0&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=83",
                vidTitle:
                  "MongoDb Tutorial: Deleting data from the Mongo Database | Web Development Tutorials #83"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=r6vtytKTWBo&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=84",
                vidTitle:
                  "MongoDb Tutorial: Updating data from the Mongo Database | Web Development Tutorials #84"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=40kCGdFOE3c&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=85",
                vidTitle:
                  "MongoDb Tutorial: MongoDb Compass & Installing Mongoose | Web Development Tutorials #85"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=WXgvYhk7Tu8&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=86",
                vidTitle:
                  "MongoDb Tutorial: Using Mongoose in NodeJs | Web Development Tutorials #86"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=4hAc0lchYs4&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=87",
                vidTitle:
                  "Plotting CoronaVirus Cases On World Map - Interactive Dashboard Using JavaScript & MapBox"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=seZhGRhbHY0&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=88",
                vidTitle:
                  "Backend Tutorial: Saving Data To The Database Using Pug + NodeJs | Web Development Tutorials #88"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=tCWPpN4nE-M&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=89",
                vidTitle:
                  "Hosting Tutorial: Where to Host your Website? | Web Development Tutorials #89"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=na0CLsaWxBQ&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=90",
                vidTitle:
                  "Hosting Tutorial: Creating Our First VPS | Web Development Tutorials #90"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=AwtGjPOx1P8&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=91",
                vidTitle:
                  "Hosting Tutorial: Installing Putty + Basic Linux Commands | Web Development Tutorials #91"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=xGOk7FW9Dww&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=92",
                vidTitle:
                  "Hosting Tutorial: Installing Apache2 Web Server on a VPS | Web Development Tutorials #92"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=ELWdKXOoMuA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=93",
                vidTitle:
                  "Hosting Tutorial: CoronaVirus Information Website With Hosting | Web Development Tutorials #93"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=vCoYrKdlbeg&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=94",
                vidTitle:
                  "Hosting Tutorial: Using Filezilla & WinSCP to upload Files | Web Development Tutorials #94"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=PS4h1Ug7h-E&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=95",
                vidTitle:
                  "Hosting Tutorial: Linking Domain to the Web Hosting Server | Web Development Tutorials #95"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=a0cp1bmcJWw&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=96",
                vidTitle:
                  "Hosting Tutorial: Host Multiple Websites On One Single Hosting Server | Web Development Tutorials#96"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=D7GaDfXkFbU&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=97",
                vidTitle:
                  "Hosting Tutorial: Deploy NodeJs Apps in Production on Linux VPS | Web Development Tutorials#97"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=Zs5CyLq4ms0&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=98",
                vidTitle:
                  "Installing MongoDb & Hosting our Dance Website on Ubuntu VPS | Web Development Tutorials #98"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=xQuEKvkc-2c&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=99",
                vidTitle:
                  "Get a Free https SSL Certificate For Your Domain on Ubuntu VPS | Web Development Tutorials #99"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=G14WMD8Kg3U&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=100",
                vidTitle:
                  "Git Tutorial: How to Upload your Projects to Git & GitHub | Web Development Tutorials #100"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=lKNrkB6Kmgc&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=101",
                vidTitle:
                  "Transparent Login Form using HTML and CSS | Web Development Tutorials #101"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=3QNBVG2yqKA&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=102",
                vidTitle:
                  "I Created a Realtime Chat Application Using NodeJs and SocketIO"
              },
              {
                vidURL:
                  "https://www.youtube.com/watch?v=GeykycZ4Ixs&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=103",
                vidTitle:
                  "Create a Responsive Website Using HTML, CSS & JavaScript in Hindi"
              }
            ]
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/android_eJ3rhzN.png",
            title: "Android Development Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about Learn to create awesome android applications in hindi",
            course: "android-tutorials-in-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/code.png",
            title: "Learn In One Video",
            subtitle: "In this series, we will learn about Learn In One Video",
            course: "Learn-in-one-video",
            videos: []
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_a6oiG1D.png",
            title: "Git and GitHub Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Git and GitHub Tutorials For Beginners In Hindi",
            course: "git-tut-beginners-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/js.png",
            title: "JavaScript Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about JavaScript Tutorials In Hindi",
            course: "javascript-tutorials-in-hindi-1",
            videos: []
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_SMHQRfM.png",
            title: "Complete Git Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Complete Git Tutorials For Beginners In Hindi",
            course: "complete-git-tutorials-in-hindi-1",
            videos: []
          }
        ]
      },
      {
        id: 3,
        name: "backend",
        title: "backend",
        vids: [
          {
            imgURL: "https://codewithharry.com/media/videoSeries/django.png",
            title: "Python Django Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about Python Django Tutorials In Hindi",
            course: "python-django-tutorials-hindi-0"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/php_HVsSGgg.png",
            title: "PHP Tutorials in Hindi",
            subtitle:
              "In this series, we will learn about PHP Tutorials in Hindi",
            course: "php-tutorials-in-hindi-1"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/flas_jdzfxKn.png",
            title: "Web Development Using Flask and Python",
            subtitle:
              "In this series, we will learn about Web Development Using Flask and Python",
            course: "web-dev-using-flask-and-python-1"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/php_XAy0Qw7.png",
            title: "Creating a Realtime PHP Chatroom Using PHP & Jquery",
            subtitle:
              "In this series, we will learn about Creating a Realtime PHP Chatroom Using PHP & Jquery",
            course: "realtime-php-chatroom-1"
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/code.png",
            title: "Learn In One Video",
            subtitle: "In this series, we will learn about Learn In One Video",
            course: "Learn-in-one-video"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_a6oiG1D.png",
            title: "Git and GitHub Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Git and GitHub Tutorials For Beginners In Hindi",
            course: "git-tut-beginners-hindi-1"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_SMHQRfM.png",
            title: "Complete Git Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Complete Git Tutorials For Beginners In Hindi",
            course: "git-tut-beginners-hindi-1"
          }
        ]
      },
      {
        id: 4,
        name: "dev ops",
        title: "devops",
        vids: [
          {
            imgURL: "https://codewithharry.com/media/videoSeries/code.png",
            title: "Learn In One Video",
            subtitle: "In this series, we will learn about Learn In One Video",
            course: "Learn-in-one-video"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_a6oiG1D.png",
            title: "Git and GitHub Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Git and GitHub Tutorials For Beginners In Hindi",
            course: "git-tut-beginners-hindi-1"
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/git_SMHQRfM.png",
            title: "Complete Git Tutorials For Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Complete Git Tutorials For Beginners In Hindi",
            course: "complete-git-tutorials-in-hindi-1"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    cat: "machineLearning",
    name: "machine learning",
    children: [
      {
        id: 6,
        name: "data science & AI",
        title: "dataScience",
        vids: [
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/algo_HGtKbPH.png",
            title: "Data Structures and Algorithms Course in Hindi",
            subtitle:
              "In this series, we will learn about Data Structures and algorithms course",
            course: "data-structures-and-algorithms-in-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/code.png",
            title: "Learn In One Video",
            subtitle: "In this series, we will learn about Learn In One Video",
            course: "Learn-in-one-video",
            videos: []
          },
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/Python-logo_SuZHKI7.jpg",
            title: "Python Data Science and Big Data Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about Python Data Science and Big Data Tutorials In Hindi",
            course: "python-big-data-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/cloudai.jpg",
            title:
              "Machine Learning Tutorials For Beginners Using Python In Hindi",
            subtitle:
              "In this series, we will learn about Machine Learning Tutorials For Beginners Using Python In Hindi",
            course: "ml-tutorials-in-hindi-1",
            videos: []
          }
        ]
      }
    ]
  },
  {
    id: 7,
    cat: "programmingLanguage",
    name: "programming languages",
    children: [
      {
        id: 8,
        name: "programming Language",
        title: "programming",
        vids: [
          {
            imgURL:
              "https://codewithharry.com/media/videoSeries/Python-logo.jpg",
            title: "Python Tutorials For Absolute Beginners In Hindi",
            subtitle:
              "In this series, we will learn about Python Tutorials For Absolute Beginners In Hindi",
            course: "python-tutorials-for-absolute-beginners-0",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/java.png",
            title: "Java Tutorials For Beginners",
            subtitle:
              "In this series, we will learn about This series will cover Java from starting to the end. We will learn java from the start to the end",
            course: "java-tutorials-for-beginners-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/default.png",
            title: "Python Practice Programs With Logic & Explanation In Hindi",
            subtitle:
              "In this series, we will learn about Python Practice Programs With Logic & Explanation In Hindi",
            course: "python-practice-programs-in-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/c_r8wWuCn.png",
            title: "C Language Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about C Language Tutorials In Hindi",
            course: "c-language-tutorials-in-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/cpp.png",
            title: "C++ Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about C++ Tutorials In Hindi",
            course: "cpp-tutorials-in-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/pygame.png",
            title: "Python Game Development Using Pygame In Hindi",
            subtitle:
              "In this series, we will learn about Python Game Development Using Pygame In Hindi",
            course: "python-game-development-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/python2.png",
            title: "Intermediate python Tutorials in Hindi",
            subtitle:
              "In this series, we will learn about Intermediate/Advanced python Tutorials in Hindi",
            course: "intermediate-python-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/discuss.png",
            title: "Coding Discussion With Harry",
            subtitle:
              "In this series, we will learn about Coding Discussion With Harry",
            course: "fastest-way-to-become-a-software-developer",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/oop.png",
            title: "Object Oriented Programming Using Python Programming",
            subtitle:
              "In this series, we will learn about Object Oriented Programming Using Python Programming",
            course: "object-oriented-hindi-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/default.png",
            title: "General Python Errors In Hindi",
            subtitle:
              "In this series, we will learn about General Python Errors In Hindi",
            course: "general-python-errors-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/code.png",
            title: "Learn In One Video",
            subtitle: "In this series, we will learn about Learn In One Video",
            course: "Learn-in-one-video",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/default.png",
            title: "Basic Python Programs With Code",
            subtitle:
              "In this series, we will learn about Basic Python Programs With Code",
            course: "basic-python-programs-1",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/python.png",
            title: "Python GUI Tkinter Tutorials In Hindi",
            subtitle:
              "In this series, we will learn about Python GUI Tkinter Tutorials In Hindi",
            course: "python-gui-tkinter-hindi-0",
            videos: []
          },
          {
            imgURL: "https://codewithharry.com/media/videoSeries/c_2OXTgR5.png",
            title: "C Language Practice Programs",
            subtitle:
              "In this series, we will learn about This series contains programs for you to practice C Programming and related concepts",
            course: "c-practice-programs-in-hindi-1",
            videos: []
          }
        ]
      }
    ]
  }
];

export default videos;
