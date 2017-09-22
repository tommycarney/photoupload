class PhotosController < ApplicationController
  before_action :authenticate_user!

  def index
    @photos = current_user.photos.all.map {|p| {"url": p.image.url(:thumb), "id": p.id }}
    @photo = Photo.new
    respond_to do |format|
      format.html
      format.json { render json: @photos }
    end
  end

  def destroy
   photo = current_user.photos.find_by(params[:id])
   if photo.destroy
      head :no_content, status: :ok
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
 end

  def create
    @photo = Photo.new(image: params[:qqfile])
    if @photo.save
      render json: { success: true }
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end


  def upload
    @photo = Photo.new
    @photo.alt_text = params[:qqfilename]
    @photo.qquuid = params[:qquuid]
    @photo.image = params[:qqfile]
    @photo.user_id = current_user.id

    if @photo.save
       respond_to do |format|
          format.json {
             render json: { success: true, photo: {"url": @photo.image.url(:thumb), "id": @photo.id } }
          }
       end
     else
       respond_to do |format|
         format.json {
           render json: { errors: 'Something went wrong'}
         }
       end
     end
  end

  def show
    @photo = current_user.photos.find(params[:id])
    @photos = current_user.photos.all.map {|p| {"url": p.image.url(:thumb), "id": p.id }}

    respond_to do |format|
        format.html { render :index }
        format.json {   render json: {"url": @photo.image.url, "id": @photo.id, "photos": @photos } }
    end

  end


  private

  def photo_params
   params.require(:photo).permit(:url, :alt_text, :image, :qquuid)
  end
end
