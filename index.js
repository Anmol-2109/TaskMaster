del=document.querySelectorAll("#delete");;
let filter_type='all'

//----------function to add a new task----------------------------------------------//
        
        function add()
        {
            let Task=document.getElementById('new_task');
            task=Task.value.trim();

            //-----check input is empty or not-------------//

            if(task===""||task===null)
            {
                alert("Enter your task first");
                return;
            }

            
            //------new div element is created for new task -----//
            let new_task=document.createElement('div');

            //-----new task is created to add----------------//
            new_task.innerHTML=
                    `<input type="checkbox" name="" id="check">
                    <span id="task">${task}</span>
                    <span id="delete">❌</span>`;
            
            
            //--------check that new element should be added in which theme---------------//

                
            if(document.getElementsByClassName('theme')[0].id==="light"){
                new_task.style.backgroundColor="#3d4757";
                new_task.querySelector('#task').style.color="#788598";
            }
            else if(document.getElementsByClassName('theme')[0].id==="dark")
            {
                console.log('bca');
                new_task.style.backgroundColor="#f5f7fa";
                 new_task.querySelector('#task').style.color="black";
            }


            //------------new task is appended in taskbar-----------------------//

            tasklist.appendChild(new_task);
            
            del=document.querySelectorAll("#delete");

            //-----------input box cleared after task added------//
            Task.value=""         
            
                //----------upadate remaining task-----------------//

            count_remaining_task();
        }


        document.getElementById('Add').addEventListener('click',add);
        
//-------------------------------function to delete a element--------------------------------------//
        
        function remove(abc)
        {

            //------------confirmation of delete ------------------//

            if(!confirm("do you want to delete"))
               return;

            //----clicked parent element is removed -------//

            abc.srcElement.parentElement.remove();

            //----------upadate count of remaining task-----------------//

           count_remaining_task();
        }
        


//-------------------------------code to select the event of delete on any task---------------------//


        document.getElementById('tasklist').addEventListener('click',function(event){
            if (event.target && event.target.id === "delete") {
                remove(event)};
        });
        


//-----------------function to count remaining uncompleted tassk----------------------------------------//

        function count_remaining_task()
        {
            count=0;
            let taskList=document.getElementById('tasklist');
            for(i=0;i<taskList.children.length;i++)
            {
                if(!taskList.children[i].children[0].checked)
                   count++;      
            }

            //----------------remaining task is update by count the number of uncj=hecked task----//

            document.getElementById('remaining_task').innerHTML="remaining task="+count;
        }


//-------------code to handle the event of checkbox when it is clicked or not -------------------------------------//


        document.getElementById('tasklist').addEventListener('change',function(event){
            if (event.target &&event.target.type==="checkbox") {
                count_remaining_task();} 
        });

        // document.getElementById('check').addEventListener('change',count_remaining_task);



//-------------------------------function to implement filter--------------------------------------------//


        function filter(type)
        {
            
            type=this.innerHTML.trim().toLowerCase();
            let taskList=document.getElementById('tasklist');

            //-----filter for all--------------------//
            if(type==="all")
            {
                fill=document.getElementById('filter');


                //----------------code to change the background color and font color each time of different filter ---------//
                    //------------so it work in prper manner only one become dark and remaining is light-------//


                for(i=0;i<fill.children.length;i++)
                {
                   fill.children[i].style.backgroundColor="#e4ebf5";
                   fill.children[i].style.color="grey";

                   fill.children[i].style.borderRadius="5px";
                }

                //-----------------all element is displayed in all filter-------//

                for(i=0;i<taskList.children.length;i++)
                {
                    
                    taskList.children[i].style.display="flex";
                }


                //--------------------code to make the required filter dark-----------------------------------//


                this.style.backgroundColor="#4a6fa5";
                this.style.color="white";
            }
            else if(type==="active")
            {
                fill=document.getElementById('filter');


                   //----------------code to change the background color and font color each time of different filter ---------//
                        //------------so it work in prper manner only one become dark and remaining is light-------//



                for(i=0;i<fill.children.length;i++)
                {
                   fill.children[i].style.backgroundColor="#e4ebf5";
                   fill.children[i].style.color="grey";
                   fill.children[i].style.borderRadius="5px";
                }

                //------------only unchecked task is displayed in active filter ----------//

                for(i=0;i<taskList.children.length;i++)
                {
                    
                    
                    if(!taskList.children[i].children[0].checked)
                    taskList.children[i].style.display="flex";
                    else
                    taskList.children[i].style.display="none";
                }

                    //--------------------code to make the required filter dark-----------------------------------//


                this.style.backgroundColor="#4a6fa5";
                this.style.color="white";
            }
            else if(type==="completed")
            {
                fill=document.getElementById('filter');

                    //----------------code to change the background color and font color each time of different filter ---------//
                        //------------so it work in prper manner only one become dark and remaining is light-------//



                for(i=0;i<fill.children.length;i++)
                {
                   fill.children[i].style.backgroundColor="#e4ebf5";
                   fill.children[i].style.color="grey";
                   fill.children[i].style.borderRadius="5px";
                }

                 //------------only checked task is displayed in completed filter ----------//

                for(i=0;i<taskList.children.length;i++)
                {
                    if(!taskList.children[i].children[0].checked)
                    taskList.children[i].style.display="none";
                    else
                    taskList.children[i].style.display="flex";
                }


//--------------------code to make the required filter dark-----------------------------------//


                this.style.backgroundColor="#4a6fa5";
                this.style.color="white";
            }

        }


//---------------function to set the filter at all by default------------------------------------//



        function start_filter()
        {
                fill=document.getElementById('filter');
                for(i=0;i<fill.children.length;i++)
                {
                   fill.children[i].style.backgroundColor="#e4ebf5";
                   fill.children[i].style.color="grey";
                }

                fill.children[0].style.backgroundColor="#4a6fa5";
                fill.children[0].style.color="white";
                fill.children[0].style.borderRadius="5px";
        }


//--------------------function to clear all the completed task in a single click---------------------//
        
        function Clear(){
            
            let Tasklist=document.getElementById('tasklist') ;

            //----clear all the checked task--------------//

            for(i=0;i<Tasklist.children.length;i++)
            {
                
                if(Tasklist.children[i].children[0].checked)
                {
                    Tasklist.children[i].remove();
                }
            }
                  
            }



//----------------code to call the clear()-------------//


        document.getElementById('clear').addEventListener('click',Clear);


//---------code to call the filter handle the multiple elemnt with same id same event handling-------------//



        let Filter=document.getElementById('filter');
        Filter.childNodes.forEach(element => {
            element.addEventListener('click' ,filter);
        });



//---------------------------function to change theme ------------------------------------------//
        
        function Change_theme()
        {
            if(this.id==="dark")
            {
               document.getElementById('header').style.backgroundColor="#2d4263";
               document.getElementById('header').style.color="#e0e6ed";

               document.getElementById('Main1').style.backgroundColor="#2c3440";

               document.getElementById('new_task').style.backgroundColor="#3d4757";
               document.getElementById('new_task').style.color="#788598";

               let Tasklist=document.getElementById('tasklist');
               for(i=0;i<Tasklist.children.length;i++)
               {
                   Tasklist.children[i].style.backgroundColor="#3d4757";
                   Tasklist.children[i].children[1].style.color="#788598"
               }

                document.getElementsByClassName('theme')[0].style.backgroundColor="grey";
                document.getElementsByClassName('theme')[0].innerHTML=`<i class="fa-solid fa-sun"></i>`;
                document.getElementsByClassName('theme')[0].style.color="white";
                document.body.style.backgroundColor="#1a1e24";

               this.id="light";
           }
           else if(this.id==="light")
           {
               document.getElementById('header').style.backgroundColor="#4a6fa5";
               document.getElementById('header').style.color="white";

               document.getElementById('Main1').style.backgroundColor="white";

               document.getElementById('new_task').style.backgroundColor="white";
               document.getElementById('new_task').style.color="black";

               let Tasklist=document.getElementById('tasklist');
               for(i=0;i<Tasklist.children.length;i++)
               {
                   Tasklist.children[i].style.backgroundColor="#f5f7fa";
                   Tasklist.children[i].children[1].style.color="black"
               }

               document.getElementsByClassName('theme')[0].style.backgroundColor="#949393";
               document.getElementsByClassName('theme')[0].innerHTML=`<i class="fa-solid fa-moon"></i>`;
                document.getElementsByClassName('theme')[0].style.color="black";


               document.body.style.backgroundColor="white";
               

               this.id="dark";
           }
        }


//-------------------------code to salect theme change------------------------//


        document.getElementsByClassName('theme')[0].addEventListener('click',Change_theme);

//---------------------------function called to count remaining task initially  when page is loaded--------------------//


        count_remaining_task();

//---------------function called initially to set the filter at all by default------------------------------------//


        start_filter();