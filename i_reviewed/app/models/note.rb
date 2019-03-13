class Note < ApplicationRecord
  belongs_to :book

  validates :title, presence: true
  validates :note, :title, exclusion: { in: %w[sex fuck fucking motherfucker bastard], message: "Mind your language sir!"}

  def no_slang_inside_note
 	text = note.split
 	i = 0
 	text.each do |notes|
		if notes == "sex"
			text[i] = "***"
		end
		if i > text.size
			i = 0
		else
			i+=1
		end
	end
  end
end


