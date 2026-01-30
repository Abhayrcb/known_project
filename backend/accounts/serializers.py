from rest_framework import serializers
from .models import UserAccount 
   
class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = UserAccount
        fields = ['username', 'phone', 'email', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def validate_email(self, value):
        if UserAccount.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already in use.")
        return value
    
    def validate_phone(self, value):
        if len(value) != 10 :
            raise serializers.ValidationError("Phone number must be  10 digits.")
        
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        
        return value
    
    def validate(self, data):
        if len(data['password']) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = UserAccount.objects.create_user(email=validated_data['email'],
                                               username=validated_data['username'],
                                               phone=validated_data.get('phone', ''),
                                               )
        
        user.set_password(validated_data['password'])
        user.save()
        return user