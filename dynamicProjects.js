var all_projects = [
    {title : "Blood Cell Classification Using CNNs and RNNs",
    img_alt : "Screenshot of Machine Learning Project",
    img_src : "/assets/img/project1-aps360.png",
    description : "A deep learning model to classify between 8 categories of blood cells.",
    tools : "Python, Pytorch, Numpy, Scikit-learn",
    accomplishments : ["Input singular blood cell image", 
                        "Predict and classify type of blood cell.",
                        "Testing Accuracy of 92.5%"
    ],
    online_src: "https://www.youtube.com/watch?v=p76Pt2VIfjg",
    github_src: "https://github.com/KashishMistry/bloodcellclassification",
    date : "April 2023"
    },
    {title : "Hello World Mapper",
    img_alt : "Screenshot of Geographic Information System Software",
    img_src : "/assets/img/hello-world.png",
    description : "An app which shows maps of a few cities, intersections, routes and directions.",
    tools : "C++, GTK Glade",
    accomplishments : ["Find shortest routes between intersections.",
                        "Provide detailed directions for given route",
                        "Map features like zoom in, zoom out, and pan."
    ],
    online_src: "https://www.beautiful.ai/player/-O77dyJdZWnkyq4jezjM/ECE297-Oral-Presentation-2",
    github_src: "",
    date : "April 2022"
    },
    {title : "Baker's Stop - FPGA Game",
    img_alt : "Screenshot of Game",
    img_src : "/assets/img/project3-ece243.png",
    description : "A simple game where the objective is to catch all the correct, falling ingredients to bake a cake using.",
    tools : "ARM(DE1-SoC), C, Assembly",
    accomplishments : ["Users can play 3 levels where pace of falling object increases with each level.",
                        "Use DE1-SoC Board and keyboard as inputs.",
                        "VGA Display to output game, LED lights show no. of mistakes and HEX display shows scores."
    ],
    online_src: "",
    github_src: "",
    date : "March 2023"
    }
]

function displayLatestProject(){
    //Source: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
    all_projects.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });

    latest = all_projects[0];

    document.getElementById("latest-projects").innerHTML = `
          <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="` + latest.img_alt +`" src="` + latest.img_src + `" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator red-text hoverline">`+ latest.title + `<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  `+ latest.description+`
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> `+ latest.tools + `</li>
                  <li>` + latest.accomplishments[0] + `.</li>
                  <li>` + latest.accomplishments[1] + `</li>
                  <li>` + latest.accomplishments[2] + `</li>
                  <li>` + latest.date + `</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="` + latest.online_src + `" target="_blank" data-position="top"
                    data-tooltip="View Presentation Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the GitHub repo for  project" href="` + latest.github_src + `"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
    `;
}

function remainingProjects(){
    //Source: https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
    all_projects.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });


    for (var i=1; i<all_projects.length; i++){
        project_to_add = all_projects[i];

        document.getElementById("all-projects").innerHTML += `
          <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="` + project_to_add.img_alt +`" src="` + project_to_add.img_src + `" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator red-text hoverline">`+ project_to_add.title + `<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  `+ project_to_add.description+`
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> `+ project_to_add.tools + `</li>
                  <li>` + project_to_add.accomplishments[0] + `.</li>
                  <li>` + project_to_add.accomplishments[1] + `</li>
                  <li>` + project_to_add.accomplishments[2] + `</li>
                  <li>` + project_to_add.date + `</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="` + project_to_add.online_src + `" target="_blank" data-position="top"
                    data-tooltip="View Presentation Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the GitHub repo for  project" href="` + project_to_add.github_src + `"
                    target="_blank" data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>`
    };
    document.getElementById("load-more-btn").style.display = "none"

}

displayLatestProject()