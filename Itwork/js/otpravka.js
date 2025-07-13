 document.getElementById('lesson-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                direction: document.getElementById('direction').value,
                level: document.getElementById('level').value,
                message: document.getElementById('message').value
            };
            
            console.log('Данные формы:', formData);
            
            
            const submitBtn = document.querySelector('.btn-submit');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            submitBtn.disabled = true;
            
            
            setTimeout(() => {
                
                document.getElementById('success-message').style.display = 'block';
                
              
                setTimeout(() => {
                    submitBtn.innerHTML = 'Отправить заявку <i class="fas fa-arrow-right"></i>';
                    submitBtn.disabled = false;
                    
                
                    document.getElementById('lesson-form').reset();
                    
             
                    document.getElementById('success-message').style.display = 'none';
                }, 4000);
            }, 1500);
        });
        
     
        document.getElementById('direction').addEventListener('change', function() {
            const directionIcon = document.querySelector('.direction-icon i');
            directionIcon.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                directionIcon.style.transform = 'rotate(0deg)';
            }, 300);
        });