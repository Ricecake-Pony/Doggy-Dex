class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :bred_for, :breed_group, :lifespan, :temperament, :weight_imperial, :weight_metric, :height_imperial, :height_metric, :image_url

  has_many :breed_reviews
  has_many :users, only:[:first_name]
end
