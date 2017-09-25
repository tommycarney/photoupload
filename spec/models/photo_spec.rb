require 'rails_helper'

RSpec.describe Photo, type: :model do

  describe "initalization" do
    let(:user) { User.create(email: "example@example.org", password: "test12345") }

    it "belongs to a user" do
      Photo.create(user_id: user.id)
      expect(user.photos.map(&:user_id)).to eq([user.id])
    end
  end
end
