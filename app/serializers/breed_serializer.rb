class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :bred_for, :breed_group, :lifespan, :temperament, :weight_imperial, :weight_metric, :height_imperial, :height_metric, :image_url
end
