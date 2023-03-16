class CreateDogProductReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :dog_product_reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :dog_product, null: false, foreign_key: true
      t.string :note

      t.timestamps
    end
  end
end
