
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ConflictModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conflictDetails?: {
    facility: string;
    timeSlot: string;
    existingEvent?: string;
  };
}

const ConflictModal = ({ open, onOpenChange, conflictDetails }: ConflictModalProps) => {
  const defaultDetails = {
    facility: "Gym 2",
    timeSlot: "4–6 PM",
    existingEvent: "Basketball Practice"
  };

  const details = conflictDetails || defaultDetails;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <DialogTitle className="text-xl font-semibold text-slate-800">
            Scheduling Conflict Detected
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-slate-600">
            Conflict detected with <strong>{details.facility}</strong> — already booked {details.timeSlot}
            {details.existingEvent && (
              <span> for <strong>{details.existingEvent}</strong></span>
            )}.
          </p>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              This time slot conflicts with an existing reservation. You can either select a different time or override this booking.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-3 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Go Back
          </Button>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => {
              // Handle override logic here
              onOpenChange(false);
            }}
          >
            Override Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConflictModal;
