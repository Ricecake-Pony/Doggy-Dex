class CreateDogProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :dog_products do |t|
      t.string :title
      t.string :description
      t.boolean :toy
      t.float :price
      t.string :image_url

      t.timestamps
    end
  end
end
