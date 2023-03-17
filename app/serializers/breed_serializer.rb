class BreedSerializer < ActiveModel::Serializer
  attributes :id, :name, :bred_for, :breed_group, :lifespan, :temperament
end
