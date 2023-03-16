class CreateBreeds < ActiveRecord::Migration[7.0]
  def change
    create_table :breeds do |t|
      t.string :name
      t.string :bred_for
      t.string :breed_group
      t.string :lifespan
      t.string :temperament
      t.string :weight_metric
      t.string :weight_imperial
      t.string :height_imperial
      t.string :height_metric
      t.string :image_url
    end
  end
end
