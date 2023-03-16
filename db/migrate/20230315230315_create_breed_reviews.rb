class CreateBreedReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :breed_reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :breed, null: false, foreign_key: true
      t.string :note
      
      t.timestamps
    end
  end
end
