class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :bred_for, :breed_group, :lifespan, :temperament, :reference_image_id
end
