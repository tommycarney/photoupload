class PhotosController < ApplicationController
  def index
    @photos = Photo.all.map {|p| {"url": p.image.url, "id": p.id }}
    @photo = Photo.new
  end

  def destroy
   photo = Photo.find_by(qquuid: params[:qquuid])
   if photo.destroy
      respond_to do |format|
         format.json {
            render json: { success: true }
         }
      end
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

    if @photo.save
       respond_to do |format|
          format.json {
             render json: { success: true, photo: {"url": @photo.image.url, "id": @photo.id } }
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


  private

  def photo_params
   params.require(:photo).permit(:url, :alt_text, :image, :qquuid)
  end
end
