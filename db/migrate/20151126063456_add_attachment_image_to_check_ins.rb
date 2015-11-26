class AddAttachmentImageToCheckIns < ActiveRecord::Migration
  def self.up
    change_table :check_ins do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :check_ins, :image
  end
end
