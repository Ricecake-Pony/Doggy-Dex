class Breed < ApplicationRecord
    has_many :breed_reviews
    has_many :users, through: :breed_reviews

    validates :name, presence: true                             
    validates :bred_for, presence: true                    
     validates :breed_group, presence: true                                   
     validates :lifespan, presence: true                
     validates :temperament, presence: true
     validates :weight_metric, presence: true                        
     validates :weight_imperial, presence: true                    
     validates :height_imperial, presence: true                 
     validates :height_metric, presence: true                 
     validates :image_url, presence: true
   

end
